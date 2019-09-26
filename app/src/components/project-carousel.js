import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button
} from 'reactstrap';

import {
    projects
} from '../data/';

import '../styles/project.css';

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === projects.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? projects.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = projects.map((p) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={p.name}
        >
          <img src={p.img} alt={p.name} />
        </CarouselItem>
      );
    });

    return (
      <>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={projects} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <h2>{projects[activeIndex].name}</h2>
        <p>{projects[activeIndex].contributions.join(', ')}</p>
        {projects[activeIndex].blog ? 
          (
            <div className='button-container'>
              <a href={projects[activeIndex].link} target='_blank' rel="noopener noreferrer">
                <Button>Explore Project</Button>
              </a>
              <a href={projects[activeIndex].blog} target='_blank' rel="noopener noreferrer">
                  <Button>Read Blog Post</Button>
              </a>
            </div>
          ) : (
            <div className='button-container'>
              <a href={projects[activeIndex].link} target='_blank' rel="noopener noreferrer">
                <Button>Explore Project</Button>
              </a>
            </div>
          )}
      </>
    );
  }
}


export default ProjectCarousel;