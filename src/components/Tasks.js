import React from "react";

const Tasks = () => {
  return (
    <article className="container article">
      <section className="tasks" id="tasks">
        <div className="section-title-wrapper">
          <h2 className="section-title">Tasks</h2>
        </div>

        <ul className="tasks-list">
          <li className="tasks-item">
            <div className="card task-card">
              <div className="card-input">
                <input type="checkbox" name="task-1" id="task-1" />

                <label htmlFor="task-1" className="task-label">
                  Draft the new contract document for sales team
                </label>
              </div>

              <div className="card-badge cyan radius-pill">Today 10pm</div>

              <ul className="card-meta-list">
                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">list</span>

                    <span>3/7</span>
                  </div>
                </li>

                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">
                      comment
                    </span>

                    <data value="21">21</data>
                  </div>
                </li>

                <li>
                  <div className="card-badge red">High</div>
                </li>
              </ul>
            </div>
          </li>

          <li className="tasks-item">
            <div className="card task-card">
              <div className="card-input">
                <input type="checkbox" name="task-2" id="task-2" />

                <label htmlFor="task-2" className="task-label">
                  iOS App home page design
                </label>
              </div>

              <div className="card-badge cyan radius-pill">Today 5pm</div>

              <ul className="card-meta-list">
                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">list</span>

                    <span>10/11</span>
                  </div>
                </li>

                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">
                      comment
                    </span>

                    <data value="5">5</data>
                  </div>
                </li>

                <li>
                  <div className="card-badge orange">Medium</div>
                </li>
              </ul>
            </div>
          </li>

          <li className="tasks-item">
            <div className="card task-card">
              <div className="card-input">
                <input type="checkbox" name="task-3" id="task-3" />

                <label htmlFor="task-3" className="task-label">
                  Enable analytics tracking
                </label>
              </div>

              <div className="card-badge radius-pill">Tomorrow 5pm</div>

              <ul className="card-meta-list">
                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">list</span>

                    <span>5/11</span>
                  </div>
                </li>

                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">
                      comment
                    </span>

                    <data value="7">7</data>
                  </div>
                </li>

                <li>
                  <div className="card-badge orange">Medium</div>
                </li>
              </ul>
            </div>
          </li>

          <li className="tasks-item">
            <div className="card task-card">
              <div className="card-input">
                <input type="checkbox" name="task-4" id="task-4" />

                <label htmlFor="task-4" className="task-label">
                  Kanban board design
                </label>
              </div>

              <div className="card-badge radius-pill">Sep 11, 3pm</div>

              <ul className="card-meta-list">
                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">list</span>

                    <span>0/5</span>
                  </div>
                </li>

                <li>
                  <div className="meta-box icon-box">
                    <span className="material-symbols-rounded  icon">
                      comment
                    </span>

                    <data value="3">3</data>
                  </div>
                </li>

                <li>
                  <div className="card-badge green">Low</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Tasks;
