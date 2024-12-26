import React from 'react'
import "./App.scss"
const App = () => {
  return (
    <div className='wrapper'>
    <h1>Hello</h1>
    <p>Add a little style!.</p>
  </div>
  )
}

export default App


// import React, { useState } from 'react';
// import "./App.css";

// const App = () => {
//   const [bgColor, setBgColor] = useState("#ffffff");

//   const colors = [
//     { name: "Qizil", hex: "#FF0000" },
//     { name: "Yashil", hex: "#00FF00" },
//     { name: "Ko'k", hex: "#0000FF" },
//     { name: "Sariq", hex: "#FFFF00" },
//     { name: "Qora", hex: "#000000" },
//   ];

//   return (
//     <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
//       <h1>Fon rangini tanlang:</h1>
//       <div className="color-buttons">
//         {colors.map((color) => (
//           <button
//             key={color.hex}
//             style={{
//               backgroundColor: color.hex,
//               color: "#fff",
//               padding: "10px 20px",
//               margin: "5px",
//               border: "none",
//               cursor: "pointer",
//             }}
//             onClick={() => setBgColor(color.hex)}
//           >
//             {color.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
















// // // import React from 'react'
// // // import "./App.css"
// // // const App = () => {
// // //   return (
// // //     <div className='wrapper'>App</div>
// // //   )
// // // }

// // // export default App















// // import React, { useState } from "react";
// // import "./App.css"; 

// // const App = () => {
// //   const [selectedEmoji, setSelectedEmoji] = useState(null);
// //   const [label, setLabel] = useState("");

// //   const handleEmojiClick = (emoji, emojiLabel) => {
// //     setSelectedEmoji(emoji);
// //     setLabel(emojiLabel);
// //   };

// //   return (
// //     <div className="emoji-picker">
// //       <h2>Kayfiyatingizni tanlang:</h2>
// //       <div className="emoji-buttons">
// //         <button onClick={() => handleEmojiClick("😀", "Quvonchli")}>😀</button>
// //         <button onClick={() => handleEmojiClick("😢", "Hafsalasiz")}>😢</button>
// //         <button onClick={() => handleEmojiClick("😡", "Jahldor")}>😡</button>
// //         <button onClick={() => handleEmojiClick("🥰", "Mehribon")}>🥰</button>
// //         <button onClick={() => handleEmojiClick("😴", "Charchagan")}>😴</button>
// //       </div>
// //       {selectedEmoji && (
// //         <div className="selected-emoji">
// //           <h3>Siz tanladingiz:</h3>
// //           <p className="emoji">{selectedEmoji}</p>
// //           <p>{label}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;
