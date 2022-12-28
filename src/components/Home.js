import React from 'react'

const Home = () => {
  return (
    <>
      <article className="container article">
      <h2 className="h2 article-title">Hi Sean!</h2>
      <p className="article-subtitle">Welcome to your Dashboard</p>        
        <section className='home'>
          <div className="card profile-card">
            <button className="card-menu-btn icon-box">
              <span className="material-symbols-rounded icon">more_horiz</span>
            </button>

            <ul className="ctx-menu">
              <li className="ctx-item">
                <button className="ctx-menu-btn icon-box">
                  <span className="material-symbols-rounded icon">edit</span>
                  <span className="ctx-menu-text">Edit</span>
                </button>
              </li>
              <li className="ctx-item">
                <button className="ctx-menu-btn icon-box">
                  <span className="material-symbols-rounded icon">cached</span>
                  <span className="ctx-menu-text">Refresh</span>
                </button>
              </li>
              <li className="divider"></li>
              <li className="ctx-item">
                <button className="ctx-menu-btn icon-box">
                  <span className="material-symbols-rounded icon">delete</span>
                  <span className="ctx-menu-text">Deactivate</span>
                </button>
              </li>
            </ul>
            <div className="profile-card-wrapper">
              <figure className="card-avatar">
                <img src="./assets/images/avatar-2.jpg" alt="" width="48" height="48" />
              </figure>

              <div>
                <p className="card-title">Sean Novick</p>
                <p className="card-subtitle">Web Developer & Designer</p>
              </div>
            </div>

            <ul className="contact-list">
              <li>
                <a href="mailto:xyz@mail.com" className="contact-link icon-box">
                  <span className="material-symbols-rounded  icon">mail</span>

                  <p className="text">xyz@mail.com</p>
                </a>
              </li>

              <li>
                <a href="tel:00123456789" className="contact-link icon-box">
                  <span className="material-symbols-rounded  icon">call</span>

                  <p className="text">+00 123-456-789</p>
                </a>
              </li>              
            </ul>
            <div className="divider card-divider"></div>
            <ul className="progress-list">
            <li className="progress-item">
              <div className="progress-label">
                <p className="progress-title">Project Completion</p>
                <data className="progress-data" value="85">85%</data>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%', background: 'var(--blue-ryb)'}}></div>
              </div>
            </li>
            <li className="progress-item">
              <div className="progress-label">
                <p className="progress-title">Overall Rating</p>
                <data className="progress-data" value="7.5">7.5</data>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%', background: 'var(--coral)'}}></div>
              </div>              
            </li>
            </ul>
          </div>

          <div className="card-wrapper">
            <div className="card task-card">
              <div className="card-icon icon-box green">
                <span className="material-symbols-rounded icon">task_alt</span>
              </div>

              <div>
                <data className="card-data">21</data>

                <p className="card-text">Tasks Completed</p>
              </div>
            </div>
            <div className="card task-card">
            <div className="card-icon icon-box blue">
                <span className="material-symbols-rounded icon">drive_file_rename_outline</span>
              </div>

              <div>
                <data className="card-data">21</data>

                <p className="card-text">Tasks Inprogress</p>
              </div>              
            </div>
          </div>

          <div className="card revenue-card">
            <button className="card-menu-btn icon-box">
              <span className="material-symbols-rounded icon">more_horiz</span>
            </button>

            <ul className="ctx-menu">
            <li className="ctx-item">
                <button className="ctx-menu-btn icon-box">
                  <span className="material-symbols-rounded icon">edit</span>
                  <span className="ctx-menu-text">Edit</span>
                </button>
              </li>
              <li className="ctx-item">
                <button className="ctx-menu-btn icon-box">
                  <span className="material-symbols-rounded icon">cached</span>
                  <span className="ctx-menu-text">Refresh</span>
                </button>
              </li>
            </ul>

            <p className="card-title">Revenue</p>
            <data className="card-price">$2,100</data>
            <p className="card-text">Last Week</p>
            <div className="divider card-divider"></div>
            <ul className="revenue-list">
              <li className="revenue-item icon-box">
                <span className="material-symbols-rounded icon green">trending_up</span>
                <div>
                  <data className="revenue-item-data">15%</data>
                  <p className="revenue-item-text">Prev Week</p>
                </div>
              </li>
              <li className="revenue-item icon-box">
                <span className="material-symbols-rounded icon red">trending_down</span>
                <div>
                  <data className="revenue-item-data">10%</data>
                  <p className="revenue-item-text">Prev Month</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      <section className="projects">

        <div className="section-title-wrapper">
          <h2 className="section-title">Recent Projects</h2>

          <button className="btn btn-link icon-box">
            <span>View All</span>

            <span className="material-symbols-rounded  icon" aria-hidden="true">arrow_forward</span>
          </button>
        </div>

        <ul className="project-list">

          <li className="project-item">
            <div className="card project-card">

              <button className="card-menu-btn icon-box" aria-label="More" data-menu-btn>
                <span className="material-symbols-rounded  icon">more_horiz</span>
              </button>

              <ul className="ctx-menu">

                <li className="ctx-item">
                  <button className="ctx-menu-btn icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">visibility</span>

                    <span className="ctx-menu-text">View</span>
                  </button>
                </li>

                <li className="ctx-item">
                  <button className="ctx-menu-btn icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">edit</span>

                    <span className="ctx-menu-text">Edit</span>
                  </button>
                </li>

                <li className="divider"></li>

                <li className="ctx-item">
                  <button className="ctx-menu-btn red icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">delete</span>

                    <span className="ctx-menu-text">Delete</span>
                  </button>
                </li>

              </ul>

              <time className="card-date" dateTime="2022-04-09">Apr 09, 2022</time>

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

                  <data className="progress-data" value="75">75%</data>
                </div>

                <div className="progress-bar">
                  <div className="progress" style={{width: '75%', background: 'var(--emerald)'}}></div>
                </div>

              </div>

              <ul className="card-avatar-list">

                <li className="card-avatar-item">
                  <a href="#">
                    <img src="./assets/images/avatar-1.jpg" alt="Elizabeth Foster" width="32" height="32" />
                  </a>
                </li>

                <li className="card-avatar-item">
                  <a href="#">
                    <img src="./assets/images/avatar-2.jpg" alt="John Foster" width="32" height="32" />
                  </a>
                </li>

              </ul>

            </div>
          </li>

          <li className="project-item">
            <div className="card project-card">

              <button className="card-menu-btn icon-box" aria-label="More" data-menu-btn>
                <span className="material-symbols-rounded  icon">more_horiz</span>
              </button>

              <ul className="ctx-menu">

                <li className="ctx-item">
                  <button className="ctx-menu-btn icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">visibility</span>

                    <span className="ctx-menu-text">View</span>
                  </button>
                </li>

                <li className="ctx-item">
                  <button className="ctx-menu-btn icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">edit</span>

                    <span className="ctx-menu-text">Edit</span>
                  </button>
                </li>

                <li className="divider"></li>

                <li className="ctx-item">
                  <button className="ctx-menu-btn red icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">delete</span>

                    <span className="ctx-menu-text">Delete</span>
                  </button>
                </li>

              </ul>

              <time className="card-date" dateTime="2022-04-09">Apr 09, 2022</time>

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

                  <data className="progress-data" value="50">50%</data>
                </div>

                <div className="progress-bar">
                  <div className="progress" style={{width: '50%' , background: 'var(--imperial-red)'}}></div>
                </div>

              </div>

              <ul className="card-avatar-list">

                <li className="card-avatar-item">
                  <a href="#">
                    <img src="./assets/images/avatar-1.jpg" alt="Elizabeth Foster" width="32" height="32" />
                  </a>
                </li>

                <li className="card-avatar-item">
                  <a href="#">
                    <img src="./assets/images/avatar-2.jpg" alt="John Foster" width="32" height="32" />
                  </a>
                </li>

              </ul>

            </div>
          </li>

          <li className="project-item">
            <div className="card project-card">

              <button className="card-menu-btn icon-box" aria-label="More" data-menu-btn>
                <span className="material-symbols-rounded  icon">more_horiz</span>
              </button>

              <ul className="ctx-menu">

                <li className="ctx-item">
                  <button className="ctx-menu-btn icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">visibility</span>

                    <span className="ctx-menu-text">View</span>
                  </button>
                </li>

                <li className="ctx-item">
                  <button className="ctx-menu-btn icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">edit</span>

                    <span className="ctx-menu-text">Edit</span>
                  </button>
                </li>

                <li className="divider"></li>

                <li className="ctx-item">
                  <button className="ctx-menu-btn red icon-box">
                    <span className="material-symbols-rounded  icon" aria-hidden="true">delete</span>

                    <span className="ctx-menu-text">Delete</span>
                  </button>
                </li>

              </ul>

              <time className="card-date" dateTime="2022-04-09">Apr 09, 2022</time>

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

                  <data className="progress-data" value="60">60%</data>
                </div>

                <div className="progress-bar">
                  <div className="progress" style={{width: '60%' , background: 'var(--sunglow)'}}></div>
                </div>

              </div>

              <ul className="card-avatar-list">

                <li className="card-avatar-item">
                  <a href="#">
                    <img src="./assets/images/avatar-1.jpg" alt="Elizabeth Foster" width="32" height="32" />
                  </a>
                </li>

                <li className="card-avatar-item">
                  <a href="#">
                    <img src="./assets/images/avatar-2.jpg" alt="John Foster" width="32" height="32" />
                  </a>
                </li>

              </ul>

            </div>
          </li>

        </ul>

      </section>

      </article>
    </>
  )
}

export default Home