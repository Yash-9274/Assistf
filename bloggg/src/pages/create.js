import React from "react";
import "./create.css";

export const Create = () => {
    return (
    <div>
    <div class="topnav">
        <a href="#categories">Category</a>
        <a href="#comunity">Community</a>
        <a class="active" href="#create">Create</a>
        <a href="#about">About Us</a>
    </div>
    <div className="form-wrapper">
        <form>
            <div className="form-row-1">
                <div className="form-element">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" className="text-box" />
                </div>

                <div>
                    <button className="publish-button">Publish</button>
                </div>
            </div>

            <div className="form-row-2">
                <div className="form-element">
                    <label htmlFor="title">Stream:</label>
                    <select className="create-select">
                        <option value="--select--">--Select--</option>
                        <option value="commerce">Commerce</option>
                        <option value="art">Art</option>
                        <option value="science">Science</option>
                    </select>
                </div>

                <div className="form-element">
                    <label htmlFor="title">Topic:</label>
                    <select className="create-select">
                        <option value="--select--">--Select--</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="cs">CS</option>
                    </select>
                </div>
            </div>

            

            
            
            <textarea rows="50" cols="170"></textarea>

            </form>
          </div>
    </div>
    );
    }
export default Create;
