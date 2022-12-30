import React from "react";

const Projects = () => {
  return (
    <>
      <article className="container article">
        <section className="projects" id="projects">
          <div className="section-title-wrapper">
            <h2 className="section-title">Projects</h2>
          </div>

          <ul className="project-list">
            <li className="project-item">
              <div className="card project-card">
                <button
                  className="card-menu-btn icon-box"
                  aria-label="More"
                  data-menu-btn
                >
                  <span className="material-symbols-rounded  icon">
                    more_horiz
                  </span>
                </button>

                <ul className="ctx-menu">
                  <li className="ctx-item">
                    <button className="ctx-menu-btn icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        visibility
                      </span>

                      <span className="ctx-menu-text">View</span>
                    </button>
                  </li>

                  <li className="ctx-item">
                    <button className="ctx-menu-btn icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        edit
                      </span>

                      <span className="ctx-menu-text">Edit</span>
                    </button>
                  </li>

                  <li className="divider"></li>

                  <li className="ctx-item">
                    <button className="ctx-menu-btn red icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        delete
                      </span>

                      <span className="ctx-menu-text">Delete</span>
                    </button>
                  </li>
                </ul>

                <time className="card-date" dateTime="2022-04-09">
                  Apr 09, 2022
                </time>

                <h3 className="card-title">
                  <a href="#">Shreyu - Design Updates</a>
                </h3>

                <div className="card-badge blue">Designing</div>

                <p className="card-text">
                  Update shreyu with modern and latest trends...
                </p>

                <div className="card-progress-box">
                  <div className="progress-label">
                    <span className="progress-title">Progress</span>

                    <data className="progress-data" value="75">
                      75%
                    </data>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: "75%", background: "var(--emerald)" }}
                    ></div>
                  </div>
                </div>

                <ul className="card-avatar-list">
                  <li className="card-avatar-item">
                    <a href="#">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt="Elizabeth Foster"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>

                  <li className="card-avatar-item">
                    <a href="#">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        alt="John Foster"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="project-item">
              <div className="card project-card">
                <button
                  className="card-menu-btn icon-box"
                  aria-label="More"
                  data-menu-btn
                >
                  <span className="material-symbols-rounded  icon">
                    more_horiz
                  </span>
                </button>

                <ul className="ctx-menu">
                  <li className="ctx-item">
                    <button className="ctx-menu-btn icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        visibility
                      </span>

                      <span className="ctx-menu-text">View</span>
                    </button>
                  </li>

                  <li className="ctx-item">
                    <button className="ctx-menu-btn icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        edit
                      </span>

                      <span className="ctx-menu-text">Edit</span>
                    </button>
                  </li>

                  <li className="divider"></li>

                  <li className="ctx-item">
                    <button className="ctx-menu-btn red icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        delete
                      </span>

                      <span className="ctx-menu-text">Delete</span>
                    </button>
                  </li>
                </ul>

                <time className="card-date" dateTime="2022-04-09">
                  Apr 09, 2022
                </time>

                <h3 className="card-title">
                  <a href="#">Prompt v2.0</a>
                </h3>

                <div className="card-badge orange">Planning</div>

                <p className="card-text">
                  Plan new features and functionality for prompt...
                </p>

                <div className="card-progress-box">
                  <div className="progress-label">
                    <span className="progress-title">Progress</span>

                    <data className="progress-data" value="50">
                      50%
                    </data>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: "50%",
                        background: "var(--imperial-red)",
                      }}
                    ></div>
                  </div>
                </div>

                <ul className="card-avatar-list">
                  <li className="card-avatar-item">
                    <a href="#">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt="Elizabeth Foster"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>

                  <li className="card-avatar-item">
                    <a href="#">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        alt="John Foster"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="project-item">
              <div className="card project-card">
                <button
                  className="card-menu-btn icon-box"
                  aria-label="More"
                  data-menu-btn
                >
                  <span className="material-symbols-rounded  icon">
                    more_horiz
                  </span>
                </button>

                <ul className="ctx-menu">
                  <li className="ctx-item">
                    <button className="ctx-menu-btn icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        visibility
                      </span>

                      <span className="ctx-menu-text">View</span>
                    </button>
                  </li>

                  <li className="ctx-item">
                    <button className="ctx-menu-btn icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        edit
                      </span>

                      <span className="ctx-menu-text">Edit</span>
                    </button>
                  </li>

                  <li className="divider"></li>

                  <li className="ctx-item">
                    <button className="ctx-menu-btn red icon-box">
                      <span
                        className="material-symbols-rounded  icon"
                        aria-hidden="true"
                      >
                        delete
                      </span>

                      <span className="ctx-menu-text">Delete</span>
                    </button>
                  </li>
                </ul>

                <time className="card-date" dateTime="2022-04-09">
                  Apr 09, 2022
                </time>

                <h3 className="card-title">
                  <a href="#">Hyper React v4.0</a>
                </h3>

                <div className="card-badge cyan">Development</div>

                <p className="card-text">
                  Update shreyu with modern and latest trends...
                </p>

                <div className="card-progress-box">
                  <div className="progress-label">
                    <span className="progress-title">Progress</span>

                    <data className="progress-data" value="60">
                      60%
                    </data>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: "60%", background: "var(--sunglow)" }}
                    ></div>
                  </div>
                </div>

                <ul className="card-avatar-list">
                  <li className="card-avatar-item">
                    <a href="#">
                      <img
                        src="./assets/images/avatar-1.jpg"
                        alt="Elizabeth Foster"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>

                  <li className="card-avatar-item">
                    <a href="#">
                      <img
                        src="./assets/images/avatar-2.jpg"
                        alt="John Foster"
                        width="32"
                        height="32"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Projects;
