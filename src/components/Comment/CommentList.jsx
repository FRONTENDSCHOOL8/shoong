// import pb from '@/api/pocketbase';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router';

// function CommentItem({ ment, id, date }) {
//   const [writer, setWriter] = useState([]);
//   const [filteredDate, setFilteredDate] = useState('');
//   useEffect(() => {
//     const getuserInfo = async () => {
//       const userData = await pb.collection('users').getOne(id);
//       setWriter(userData);
//     };
//     getuserInfo();
//     setFilteredDate(date.slice(0, 10));
//   }, []);
//   const src = `https://shoong.pockethost.io/api/files/users/${writer.id}/${writer.avatar}`;
//   return (
//     <article className="my-4 flex flex-row items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg">
//       <img src={src} className="aspect-square h-42pxr rounded-full" />
//       <div className="flex flex-col flex-nowrap gap-x-1 ">
//         <p className="text-left text-base font-bold">
//           {writer.name}
//           <span className="px-1 text-m01 text-contentSecondary">
//             {filteredDate}
//           </span>
//         </p>
//         <p className="text-left">{ment}</p>
//       </div>
//     </article>
//   );
// }

// export default function CommentList() {
//   const [comments, setComments] = useState([]);
//   const { id } = useParams();
//   useEffect(() => {
//     const getComments = async () => {
//       const meetUp = await pb.collection('MeetUps').getOne(id, {
//         expand: 'comments',
//       });
//       console.log(meetUp.expand.comments);
//       setComments(meetUp.expand.comments);
//     };
//     getComments();
//   }, []);
//   return (
//     <>
//       {comments.map((comment) => (
//         <CommentItem
//           key={comment.id}
//           ment={comment.ment}
//           id={comment.name}
//           date={comment.created}
//         />
//       ))}
//     </>
//   );
// }
