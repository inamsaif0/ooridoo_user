import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function GetStartedStep2() {

    return (
        <div className="get-started-wrapper">
            <div className="get-started-container" style={{ padding: '20px' }}>
                <div className="get-started-form2">
                    <form>
                        <div class="input-group mb-3">
                            <span style={{ height: '45px' }} class="input-group-text" id="basic-addon1"><FaSearch /></span>
                            <input type="text" style={{ width: "calc(100% - 8%)" }} placeholder="Search for additional areas, hit enter to add" />
                        </div>
                        <h4>I’ll work with customers in:</h4>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Allston" checked />
                                <label for="Allston">
                                    Allston
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Arlington" checked />
                                <label for="Arlington">
                                    Arlington
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Belmont" checked />
                                <label for="Belmont">
                                    Belmont
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Boston" checked />
                                <label for="Boston">
                                    Boston
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Brighton" checked />
                                <label for="Brighton">
                                    Brighton
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Brookline" checked />
                                <label for="Brookline">
                                    Brookline
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Cambridge" checked />
                                <label for="Cambridge">
                                    Cambridge
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Charlestown" checked />
                                <label for="Charlestown">
                                    Charlestown
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Chelsea" checked />
                                <label for="Chelsea">
                                    Chelsea
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Chestnut-Hill" checked />
                                <label for="Chestnut-Hill">
                                    Chestnut Hill
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Dorchester" checked />
                                <label for="Dorchester">
                                    Dorchester
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="East-Boston" checked />
                                <label for="East-Boston">
                                    East Boston
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Everett" checked />
                                <label for="Everett">
                                    Everett
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Jamaica-Plain" checked />
                                <label for="Jamaica-Plain">
                                    Jamaica Plain
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Malden" checked />
                                <label for="Malden">
                                    Malden
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Medford" checked />
                                <label for="Medford">
                                    Medford
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Newton" checked />
                                <label for="Newton">
                                    Newton
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Newton-Center" checked />
                                <label for="Newton-Center">
                                    Newton Center
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="North-Waltham" checked />
                                <label for="North-Waltham">
                                    North Waltham
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Roxbury" checked />
                                <label for="Roxbury">
                                    Roxbury
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Roxbury-Crossing" checked />
                                <label for="Roxbury-Crossing">
                                    Roxbury Crossing
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Someville" checked />
                                <label for="Someville">
                                    Someville
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="South-Boston" checked />
                                <label for="South-Boston">
                                    South Boston
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Water-Town" checked />
                                <label for="Water-Town">
                                    Water Town
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
