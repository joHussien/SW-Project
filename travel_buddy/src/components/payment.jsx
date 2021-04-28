import React, { Component } from "react";
// import "../mystyle.css";
export default class payment extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-6">Pay for your trip</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card ">
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <ul
                    role="tablist"
                    className="nav bg-light nav-pills rounded nav-fill mb-3"
                  >
                    <li className="nav-item">
                      {" "}
                      <a
                        data-toggle="pill"
                        href="#credit-card"
                        className="nav-link active "
                      >
                        {" "}
                        <i className="fas fa-credit-card mr-2"></i> Credit Card{" "}
                      </a>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        data-toggle="pill"
                        href="#paypal"
                        className="nav-link "
                      >
                        {" "}
                        <i className="fab fa-paypal mr-2"></i> Paypal{" "}
                      </a>{" "}
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        data-toggle="pill"
                        href="#net-banking"
                        className="nav-link "
                      >
                        {" "}
                        <i className="fas fa-mobile-alt mr-2"></i> Net Banking{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    id="credit-card"
                    className="tab-pane fade show active pt-3"
                  >
                    <form role="form" onsubmit="event.preventDefault()">
                      <div className="form-group">
                        {" "}
                        <label for="username">
                          <h6>Card Owner</h6>
                        </label>{" "}
                        <input
                          type="text"
                          name="username"
                          placeholder="Card Owner Name"
                          required
                          className="form-control "
                        />{" "}
                      </div>
                      <div className="form-group">
                        {" "}
                        <label for="cardNumber">
                          <h6>Card number</h6>
                        </label>
                        <div className="input-group">
                          {" "}
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Valid card number"
                            className="form-control "
                            required
                          />
                          <div className="input-group-append">
                            {" "}
                            <span className="input-group-text text-muted">
                              {" "}
                              <i className="fab fa-cc-visa mx-1"></i>{" "}
                              <i className="fab fa-cc-mastercard mx-1"></i>{" "}
                              <i className="fab fa-cc-amex mx-1"></i>{" "}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="form-group">
                            <label>
                              <span className="hidden-xs">
                                <h6>Expiration Date</h6>
                              </span>
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                placeholder="MM"
                                name=""
                                className="form-control"
                                required
                              />
                              <input
                                type="number"
                                placeholder="YY"
                                name=""
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group mb-4">
                            {" "}
                            <label
                              data-toggle="tooltip"
                              title="Three digit CV code on the back of your card"
                            >
                              <h6>
                                CVV{" "}
                                <i className="fa fa-question-circle d-inline"></i>
                              </h6>
                            </label>{" "}
                            <input
                              type="password"
                              required
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        {" "}
                        <button
                          type="button"
                          className="subscribe btn btn-primary btn-block shadow-sm"
                        >
                          {" "}
                          Confirm Payment{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div id="paypal" className="tab-pane fade pt-3">
                  <h6 className="pb-2">Select your paypal account type</h6>
                  <div className="form-group ">
                    {" "}
                    <label className="radio-inline">
                      {" "}
                      <input
                        type="radio"
                        name="optradio"
                        checked
                      /> Domestic{" "}
                    </label>{" "}
                    <label className="radio-inline">
                      {" "}
                      <input type="radio" name="optradio" className="ml-5" />
                      International{" "}
                    </label>
                  </div>
                  <p>
                    {" "}
                    <button type="button" className="btn btn-primary ">
                      <i className="fab fa-paypal mr-2"></i> Log into my Paypal
                    </button>{" "}
                  </p>
                  <p className="text-muted">
                    {" "}
                    Note: After clicking on the button, you will be directed to
                    a secure gateway for payment. After completing the payment
                    process, you will be redirected back to the website to view
                    details of your order.{" "}
                  </p>
                </div>
                <div id="net-banking" className="tab-pane fade pt-3">
                  <div className="form-group ">
                    {" "}
                    <label for="Select Your Bank">
                      <h6>Select your Bank</h6>
                    </label>{" "}
                    <select className="form-control" id="ccmonth">
                      <option value="" selected disabled>
                        --Please select your Bank--
                      </option>
                      <option>Commercial International Bank (CIB)</option>
                      <option>Banque du Caire</option>
                      <option>National Bank of Egypt</option>
                      <option>Bank of Alexandria</option>
                      <option>Emirates NBD</option>
                      <option>Ahli United Bank</option>
                      <option>Credit Agricole Egypt</option>
                    </select>{" "}
                  </div>
                  <div className="form-group">
                    <p>
                      {" "}
                      <button type="button" className="btn btn-primary ">
                        <i className="fas fa-mobile-alt mr-2"></i> Proceed
                        Payment
                      </button>{" "}
                    </p>
                  </div>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to
                    a secure gateway for payment. After completing the payment
                    process, you will be redirected back to the website to view
                    details of your order.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
