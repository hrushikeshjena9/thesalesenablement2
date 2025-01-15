import React from 'react';

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      author: 'Kevin Martin',
      date: 'March 20, 2023 at 2:37 PM',
      content: 'Neque porro est qui dolorem ipsum quia quaed inventor veritatis et beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var.',
      replies: [
        {
          id: 1,
          author: 'Kevin Martin',
          date: 'March 20, 2023 at 2:37 PM',
          content: 'Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var.',
        },
      ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h3 className="text-xl font-semibold mb-4">02 Comments</h3>

      {comments.map((comment) => (
        <div key={comment.id} className="border-t border-gray-300 pt-4">
          {/* Main Comment */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-start space-x-2">
              <span className="font-semibold text-gray-800">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700 text-sm">{comment.content}</p>
            <button className="text-sm text-[#DB0032] hover:underline">Reply</button>
          </div>

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-6 mt-4 border-t border-gray-200 pt-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex flex-col space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-gray-800">{reply.author}</span>
                    <span className="text-sm text-gray-500">{reply.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{reply.content}</p>
                  <button className="text-sm text-[#DB0032] hover:underline">Reply</button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-6">
        <button className="px-4 py-2 bg-[#DB0032] text-white rounded-md hover:bg-[#FA6602]">1</button>
        <button className="px-4 py-2 bg-white text-[#DB0032] border-2 border-[#DB0032] rounded-md hover:bg-[#FA6602] hover:text-white">2</button>
        <button className="px-4 py-2 bg-white text-[#DB0032] border-2 border-[#DB0032] rounded-md hover:bg-[#FA6602] hover:text-white">3</button>
      </div>
    </div>
  );
};

export default CommentSection;
