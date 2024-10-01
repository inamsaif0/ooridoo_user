import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function GetStartedStep3() {

    return (
        <div className="get-started-wrapper">
            <div className="get-started-container" style={{ padding: '20px' }}>
                <div className="get-started-form2">
                    <form>
                        <div class="input-group mb-3">
                            <span style={{ height: '45px' }} class="input-group-text" id="basic-addon1"><FaSearch /></span>
                            <input type="text" style={{ width: "calc(100% - 8%)" }} placeholder="Search for additional services, hit enter to add" />
                        </div>
                        <h4>I provide these services:</h4>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Bathroom Design" checked />
                                <label for="Bathroom Design">
                                    Bathroom Design
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Bedroom Design" checked />
                                <label for="Bedroom Design">
                                    Bedroom Design
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Color Consulting" checked />
                                <label for="Color Consulting">
                                    Color Consulting
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Dining Room Design" checked />
                                <label for="Dining Room Design">
                                    Dining Room Design
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Furniture Selection" checked />
                                <label for="Furniture Selection">
                                    Furniture Selection
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Interior Design" checked />
                                <label for="Interior Design">
                                    Interior Design
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Kids Bedroom Design" checked />
                                <label for="Kids Bedroom Design">
                                    Kids Bedroom Design
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Kitchen Design" checked />
                                <label for="Kitchen Design">
                                    Kitchen Design
                                </label>
                            </div><div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Living Room Design" checked />
                                <label for="Living Room Design">
                                    Living Room Design
                                </label>
                            </div>
                            <div className="col-md-6 d-flex align-items-center gap-2">
                                <input type="checkbox" id="Space Planning" checked />
                                <label for="Space Planning">
                                    Space Planning
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
