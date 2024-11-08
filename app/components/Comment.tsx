import React from 'react';

interface CommentProps {
  avatar: string;
  username: string;
  timestamp: string;
  commentText: string;
}

const Comment: React.FC<CommentProps> = ({ avatar, username, timestamp, commentText }) => {
    const maxChars=200;
    const truncatedText = commentText.length > maxChars 
    ? commentText.substring(0, maxChars) + "..." 
    : commentText;
  return (
    <div className="max-w-sm border px-6 py-4 rounded-lg m-2">
      <div className="flex items-center mb-6">
        <img src={avatar} alt="Avatar" className="w-8 rounded-full mr-4" />
        <div className='flex flex-col text-start'>
          <div className="text-sm font-medium text-gray-800">{username}</div>
          <div className="text-gray-500 text-sm">{timestamp}</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed mb-3 text-justify">{truncatedText}</p>
      <div className="flex justify-between items-center">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="far fa-comment-alt"></i> Reply
        </a>
      </div>
    </div>
  );
};

export default Comment;
