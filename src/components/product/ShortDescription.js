import React from "react";

const ShortDescription = ({ description }) => {
  // Function to strip HTML tags and extract plain text
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // Process the description
  const textContent = stripHtmlTags(description);
  const words = textContent.split(" ");

  // Define the number of words to show
  const wordLimit = 40; // Adjust as needed

  // Extract the truncated description
  const truncatedDescription = words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");

  return (
    <div className="my-4">
      <strong>Description: </strong>
      {truncatedDescription}
    </div>
  );
};

export default ShortDescription;
