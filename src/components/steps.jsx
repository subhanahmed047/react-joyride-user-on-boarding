import React, { Component } from "react";
import Joyride, { STATUS } from "react-joyride";

const HelpButton = ({ tourElTarget, onStartTour }) => {
  return (
    <button
      className={`${tourElTarget} btn btn-danger text-white`}
      type="button"
      onClick={onStartTour}
      aria-expanded="false"
      aria-label="Help"
    >
      Walk Me Through!
    </button>
  );
};

const Blog = ({ tourElTarget, children }) => {
  return (
    <div className={`${tourElTarget} album py-5 bg-light`}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

const BlogPost = ({ tourElTarget }) => {
  return (
    <div className={`${tourElTarget} col-md-4`}>
      <div className="card mb-4 box-shadow">
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ tourElTarget, children }) => {
  return (
    <header className={tourElTarget}>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <strong className="text-white">On-Boarding Demo</strong>
          {children}
        </div>
      </div>
    </header>
  );
};

const Jumbotron = ({ tourElTarget }) => {
  return (
    <section className={`${tourElTarget} jumbotron text-center`}>
      <div className="container">
        <h1 className="jumbotron-heading">On-Boarding Demo</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <p>
          <a href={null} className="btn btn-primary my-2 text-white">
            Main call to action
          </a>
        </p>
      </div>
    </section>
  );
};

class Steps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {
          title: "Let's begin our journey!",
          content: (
            <p>
              This small tutorial will help you understand different parts of
              our Application.
            </p>
          ),
          placement: "center",
          target: "body"
        },
        {
          target: ".jumbotron",
          content: "This area shows a little bit about us.",
          title: "About us",
          placement: "auto"
        },
        {
          target: ".blog",
          content:
            "This is your blog section, where you can see different posts from users.",
          title: "Blog Posts for a selected category",
          placement: "auto"
        },
        {
          target: ".blogPost5",
          content: "This is one of your blog post.",
          title: "A Blog Post",
          placement: "auto"
        },
        {
          target: ".helpBtn",
          content: "You can click this button any time to get help again!",
          placement: "bottom",
          title: "We're here to help!"
        }
      ],
      run: false
    };
  }

  onClickHelp = e => {
    this.setState({
      run: true
    });
  };

  handleJoyrideCallback = data => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      this.setState({ run: false });
    }
  };

  render() {
    const { steps, run } = this.state;

    return (
      <div className="app">
        <Joyride
          callback={this.handleJoyrideCallback}
          continuous
          run={run}
          scrollToFirstStep
          showProgress
          steps={steps}
          styles={{
            options: {
              zIndex: 10000
            }
          }}
        />
        <Header tourElTarget="header">
          <HelpButton onStartTour={this.onClickHelp} tourElTarget="helpBtn" />
        </Header>
        <main role="main">
          <Jumbotron tourElTarget="jumbotron" />
          <Blog tourElTarget="blog">
            <BlogPost tourElTarget="blogPost1" />
            <BlogPost tourElTarget="blogPost2" />
            <BlogPost tourElTarget="blogPost3" />
            <BlogPost tourElTarget="blogPost4" />
            <BlogPost tourElTarget="blogPost5" />
            <BlogPost tourElTarget="blogPost6" />
          </Blog>
        </main>
      </div>
    );
  }
}

export default Steps;
