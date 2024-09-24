import React, { Fragment } from "react";

const refundPolicy = [
  {
    title: "1. A user may request a return or exchange within seven days from the date of receipt of the product pursuant to Article 17 of the Act on Consumer Protection in Electronic Commerce, etc.: Provided, That where the withdrawal of subscription is otherwise prescribed in the Act on Consumer Protection in Electronic Commerce, etc., the provisions of the same Act shall apply.",
  },
  {
    title: "2. Users may not request a return or exchange in any of the following cases.",
    subpoints: [
      "① Where goods, etc. are lost or damaged due to reasons responsible to the user (however, where simple external packaging, etc. is damaged to confirm the contents of goods, etc., the subscription may be withdrawn)",
      "② Where the value of goods, etc. has been significantly reduced by the use of users or partial consumption",
      "③ Where the value of goods, etc. has significantly decreased to the extent that it is difficult to resell them over time",
      "④ In the case of opening or damaging the packaging of goods, etc. that can be reproduced",
      "⑤ If the user agrees that the product is a product that is purchased individually to an overseas purchaser after confirming the order by the user's individual order, and that the product is restricted from withdrawing subscription",
      "⑥ Where there is a reasonable reason for not being able to request a refund or exchange due to the nature of other goods, etc.",
    ],
  },
  {
    title: "3. In the case of Paragraph 2 (2) 2 through 4, the user's withdrawal of subscription is not restricted unless the company takes measures such as specifying in a place where the user can easily see that the withdrawal of subscription is restricted or providing trial products.",
  },
  {
    title: "4. Notwithstanding the provisions of paragraphs (1) and (2), the user may request a refund, return, or exchange of goods, etc. within 30 days from the date of receipt of the goods, etc., and the company shall bear all expenses for the return.",
    subpoints: [
      "① Where the contents of the goods, etc. are different from the contents of the display or advertisement or the contents of the contract. However, in this case, the subscription may be withdrawn within 30 days (within three months from the date of receipt at the latest) from the date of knowing or being able to know the fact.",
      "② Where the delivered goods are damaged, damaged or contaminated without the user's negligence, or are destroyed by objective standards",
      "③ If the goods are deliberately delivered later than the delivery period indicated in the advertisement",
    ],
  },
  {
    title: "5. If the goods delivered are returned for reasons not falling under paragraph 4, the user shall bear all the costs of return and shipping.",
  },
  {
    title: "6. If the transaction is canceled and the payment is refunded, the company takes necessary measures to refund the user within two business days from the date the transaction is canceled. If you pay with a credit card, the approval of the payment will be canceled as soon as you request a refund, and if the transaction paid with the prepaid electronic payment method is canceled, you will be refunded immediately.",
  },
  {
    title: "7. Refunds of purchases made by card payment can only be made through cancellation of card payment and will not be refunded in cash in any case.",
  },
  {
    title: "8. You can cancel your purchase until the item is shipped, and it will be processed by return during shipping.",
  },
  {
    title: "9. In principle, the cancellation process is completed immediately while being prepared for delivery, but if the product has already been shipped, the buyer should bear the round-trip shipping cost of the shipped product.",
  },
  {
    title: "10. When a user finds it impossible or difficult to deliver goods or provide services due to reasons such as out of stock, the company shall notify the user of the reason without delay, and if the payment for goods or services is received in advance, the company shall refund or take necessary measures for refund within three business days from the date of receipt of the payment.",
  },
];

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-content">
          <h3>Refund Policy</h3>
          {refundPolicy.map((item, index) => (
            <div key={index}>
              {/* <h4 style={{marginBottom:'10px'}} >{item.title}</h4> */}
              <div class="single-mission mb-30"><h4>{item.title}</h4></div>
              {item.subpoints && (
                <ul>
                  {item.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex}>
                      <blockquote>{subpoint}</blockquote>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
