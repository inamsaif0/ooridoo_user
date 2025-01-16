import React, { useEffect, useState } from "react";
import BaseUrl from "../../../../BaseUrl";
// import "bootstrap/dist/css/bootstrap.min.css";

const OrderDetails = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleModalOpen = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table">
          <thead  style={{ backgroundColor: "#f8f9fa", color: "#000" }}>
            <tr className="">
              <th className="p-4 text-center" style={{fontWeight: "500", textTransform: "uppercase"}}>Delivery Status</th>
              <th className="p-4 text-center" style={{fontWeight: "500", textTransform: "uppercase"}}>Payment Status</th>
              <th className="p-4 text-center" style={{fontWeight: "500", textTransform: "uppercase"}}>Payment ID</th>
              <th className="p-4 text-center" style={{fontWeight: "500", textTransform: "uppercase"}}>Address</th>
              <th className="p-4 text-center" style={{fontWeight: "500", textTransform: "uppercase"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #e9ecef !important"  }}>
                <td className="text-center px-4 text-capitalize">{order.deliveryStatus}</td>
                <td className="text-center px-4 text-capitalize">{order.paymentStatus}</td>
                <td className="text-center px-4 text-capitalize">{order.paymentId}</td>
                <td className="text-center px-4 text-capitalize">{order.shippingAddress || "N/A"}</td>
                <td className="text-center px-4 text-capitalize">
                  <button
                    className="btn btn-sm py-2 px-4 text-white"
                    style={{backgroundColor: "#e6b732", borderRadius: "20px",}}
                    onClick={() => handleModalOpen(order)} 
                  >
                    View Products
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {showModal && selectedOrder && (
        <div 
          className="modal show d-block"        
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ordered Products</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {selectedOrder.products.map((productItem, idx) => {
                    const { productId, quantity } = productItem;
                    const productImage = productId.media[0]?.file || "placeholder.jpg";
                    const productTitle = productId.title;

                    return (
                      <div key={idx} className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            src={`${BaseUrl.baseurl}/${productImage}`}
                            className="card-img-top"
                            alt={productTitle}
                            style={{ height: "200px", objectFit: "cover", objectPosition: "top" }}
                          />
                          <div className="card-body">
                            <h6 className="card-title">{productTitle}</h6>
                            <p className="card-text">
                              <strong>Quantity:</strong> {quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
