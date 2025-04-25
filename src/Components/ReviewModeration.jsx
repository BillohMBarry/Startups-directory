import {ClipLoader} from 'react-spinners';
import { useState } from 'react';
import { Clock, ShieldX, ShieldCheck,Flag } from 'lucide-react';

function ReviewModeration({ startupReview, onStatusChange }) {
  const [status, setStatus] = useState(startupReview.status || 'pending');
  const [isLoading, setIsLoading] = useState(null);

  const handleModerateReview = (newStatus) => {
    setIsLoading(newStatus);
    // Simulate a delay to mimic API call
    setTimeout(() => {
      setStatus(newStatus);
      if (onStatusChange) {
        onStatusChange(startupReview.id, newStatus);
      }
      setIsLoading(null);
    }, 1000);
  };
  // Map status to label and color
  const statusLabels = {
    approved: {
      text: "Approved",
      color: "text-green-600",
      icon: <ShieldCheck size={14} />,
    },
    rejected: {
      text: "Rejected",
      color: "text-red-600",
      icon: <ShieldX size={14}  />,
    },
    pending: {
      text: "Pending",
      color: "text-amber-600",
      icon: <Clock size={14} />,
    },
  };

  // change the clip loader color based on the status
  const clipColor = (buttonStatus) => {
    if(isLoading === buttonStatus) {
      return  buttonStatus === "rejected" ?
      <ClipLoader color='red' /> : 
      <ClipLoader color='green' />
    }
    return null
  }

  // Map status to button label
  const renderButton = (buttonStatus, label) => (
    <div
      className={`border p-1 rounded inline-flex gap-3 align-middle cursor-pointer ${
        buttonStatus === "approved" ? "border-green-600 text-green-600" : "border-red-600 text-red-600"
      }`}
    >
      {buttonStatus === "approved" ? <ShieldCheck size={20} className="mt-1" /> : <ShieldX size={20} className="mt-1" />}
      <button
        className="cursor-pointer"
        onClick={() => handleModerateReview(buttonStatus)}
        disabled={isLoading !== null}
      >
        {isLoading === buttonStatus ? clipColor(buttonStatus) : label}
      </button>
    </div>
  );
  // let clipColor = isLoading ? <ClipLoader color='green' /> : <ClipLoader color='red' />
  return (
    <div className={`bg-card p-6 rounded-xl border  mt-5  ${status === "rejected" ? "opacity-60" :""} `}>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Flag />Review Moderation</h3>
      <div className="space-y-6">
        <div className="flex flex-wrap justify-between gap-2 items-start mb-2">
          <div className="flex gap-2">
            <h3>{startupReview.author}</h3>
            <span>{startupReview.createdAt}</span>
          </div>
          <div className="flex gap-2">
            <span>{startupReview.rating}</span>
            <span className={`flex items-center gap-1 text-sm font-medium ${statusLabels[status].color}`}>
              {statusLabels[status].icon}
              {statusLabels[status].text}
            </span>
          </div>
        </div>
        <p className="text-xl">{startupReview.comment}</p>
        <div className="flex justify-end gap-3">   
          {status === 'pending' && (
            <>
              {renderButton("rejected", "Reject")}
              {renderButton("approved", "Approve")}
            </>
          )}
          {status === 'rejected' && renderButton("approved", "Approve Instead")}
          {status === 'approved' && renderButton("rejected", "Reject Instead")}
        </div>
      </div>
    </div>
  );
}

export default ReviewModeration;
