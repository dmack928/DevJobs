import React from 'react';
import brand from '../nav/logo128.png';

const SignUp = () => (
 <section className="hero is-light is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h3 className="title has-text-black">Job Seeker SignUp</h3>
          <p className="subtitle has-text-black">Get Started.</p>
          <div className="box">
            <figure className="avatar is-128x128">
              <img src={brand}/>
            </figure>
            <form>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="text" placeholder="Username" autoFocus="" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="Job" placeholder="Password" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="Job" placeholder="Full Name" />
                </div>
              </div>
                <div className="field">
                <div className="control">
                  <input className="input is-large" type="Zipcode" placeholder="Zipcode" />
                </div>
              </div>
                <div className="field">
                <div className="control">
                  <input className="input is-large" type="Deired Title" placeholder="Desired Job Title" />
                </div>
              </div>
              <div class="field">
  <div class="control">
    <div class="select is-primary">
      <select>
        <option>Preferred Industry</option>
         <option>Information Technology</option>
         <option>Software as a service (SaaS) development </option>
        <option>Financial Technology or Services</option>
        <option>Data and Analytics</option>
        <option>Media, Advertising,Publishing,or Entertainment</option>
        <option>Retail or eCommerce</option>
        <option>Healthcare Technology or Services</option>
      </select>
    </div>
  </div>
</div>
              <div class="field">
  <div class="control">
    <div class="select is-primary">
      <select>
        <option>Specialization</option>
        <option>Full Stack Developer</option>
        <option>Front End Developer</option>
        <option>Back End Developer</option>
      </select>
    </div>
  </div>
</div>
              <button className="button is-block is-info is-large is-fullwidth">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default SignUp;
