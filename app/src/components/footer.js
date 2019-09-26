import React, {
    Component
} from 'react';

import '../styles/footer.css';

export default class Footer extends Component {
    render() {
      return (
        <div>
            <div className='icons'>
                <a href='mailto:trailynne@gmail.com' target='_blank'><i class="fas fa-envelope-open-text"></i></a>

                <a href='https://www.linkedin.com/in/trai-lynne-compton/' target='_blank'><i class="fab fa-linkedin-in"></i></a>

                <a href='https://github.com/trailynne' target='_blank'><i class="fab fa-github"></i></a>

                <a href='https://www.instagram.com/trailynne/' target='_blank'><i class="fab fa-instagram"></i></a>

                <a href='https://twitter.com/trailynne/' target='_blank'><i class="fab fa-twitter"></i></a>
            </div>
            <p><i class="far fa-copyright"></i>Trai Lynne 2019</p>
        </div>
      );
    }
  }