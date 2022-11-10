import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";

function ImageDisplay({ filePath, title, description, moreFiles, links }) {
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(moreFiles);
    setFile(filePath);
  }, [moreFiles, filePath]);

  const returnLinks = () => {
    if (links) {
      return links;
    } else {
      return <div />;
    }
  };

  if (moreFiles.length >= 1) {
    return (
      <div>
        <div>
          <div className="row">
            <div
              className="col-sm-5 thumbnail imgDisplay"
              id="gallery"
              data-toggle="modal"
              data-target={`#modal${filePath}`}
            >
              <img src={filePath} alt="fileIMG" id="imgShown" />
            </div>
            <div className="col-sm-7">
              <h3>{title}</h3>
              <p id="description">{description}</p>
              {returnLinks()}
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id={`modal${filePath}`}
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="titleInModal">{title}</div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div class="modal-body">
                <div
                  class="row"
                  id="gallery"
                  data-toggle="modal"
                  data-target={`#modal${filePath}`}
                ></div>
                <div id={filePath} class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img className="d-block" src={file} alt="gallery-img" />
                    </div>
                    {files.map((img) => (
                      <div class="carousel-item" key={img}>
                        <img
                          className="d-block w-100 img-responsive"
                          src={img}
                          alt="gallery-img"
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    class="carousel-control-prev"
                    href={`#${filePath}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href={`#${filePath}`}
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // if there is only a single image to be shown
  else
    return (
      <div>
        <div>
          <div className="row">
            <div
              className="col-sm-5 thumbnail imgDisplay"
              id="gallery"
              data-toggle="modal"
              data-target={`#modal${filePath}`}
            >
              <img src={filePath} alt="fileIMG" id="imgShown" />
            </div>
            <div className="col-sm-7">
              <h3>{title}</h3>
              <p id="description">{description}</p>
              {returnLinks()}
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id={`modal${filePath}`}
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="titleInModal">{title}</div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div class="modal-body">
                <img
                  className="d-block w-100 img-responsive"
                  src={file}
                  alt="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ImageDisplay;
