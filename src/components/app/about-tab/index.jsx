import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { applyUpdate } from 'offline-plugin/runtime';
import patronImage from '@images/patron.png';
import Credits from './credits';
import './about.scss';

const handleUpdateClick = e => {
  e.preventDefault();
  applyUpdate(() => {
    window.location.reload();
  });
};

const AboutTabComponent = ({ version, isUpdateAvailable, isOnline }) => {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.ready(twttr => {
        twttr.widgets.load();
      });
    }
  }, [window.twttr]);
  return (
    <div className="about-tab centered-tab">
      {isUpdateAvailable && isOnline && (
        <p className="update-alert">
          <a href="/" onClick={handleUpdateClick}>
            <span className="update-alert__dot" />
            New Version Available
          </a>
        </p>
      )}
      <p>
        This site is a collection of generative music pieces which can be
        listened to. The term &quot;generative music&quot; describes music which
        changes continuously and is created by a system. Such systems generate
        music for as long as one is willing to listen.
      </p>
      <p>
        The pieces featured on this site are not recordings. The music is
        generated by a different system created for each piece. These systems
        have been designed such that each performance is unique and plays
        continuously without repetition.{' '}
        <a
          href="https://medium.com/@metalex9/introduction-to-generative-music-91e00e4dba11?source=friends_link&sk=8afe1048f04b435267d353cc2a78da00"
          target="_blank"
          rel="noreferrer noopener"
        >
          Learn more about generative music from this introduction.
        </a>
      </p>
      <p>
        Most of the pieces featured are quite minimal and ambient. Here
        &quot;ambient&quot; means the music is intended to enhance one&apos;s
        environment but not demand attention.
      </p>
      <p>
        Questions, suggestions, and feedback can be sent to{' '}
        <a href="mailto:alex@alexbainter.com?Subject=Generative.fm">
          alex@alexbainter.com
        </a>
        .
      </p>
      <p>
        <a
          href="https://twitter.com/alex_bainter?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @alex_bainter
        </a>{' '}
        on Twitter for updates about the site.{' '}
      </p>
      <p>
        If you enjoy this project, consider supporting it by{' '}
        <a
          href="https://www.patreon.com/bePatron?u=2484731"
          target="_blank"
          rel="noreferrer noopener"
        >
          becoming a Patron
        </a>{' '}
        or through{' '}
        <a
          href="https://paypal.me/alexbainter"
          target="_blank"
          rel="noreferrer noopener"
        >
          PayPal
        </a>
        .
      </p>
      <br />
      <p>{`v${version}`}</p>
      <p>
        Made by{' '}
        <a
          href="https://alexbainter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Alex Bainter
        </a>
      </p>
      <br />
      <Credits />
      <p className="center">
        <a
          href="https://www.patreon.com/bePatron?u=2484731"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={patronImage} width="150" />
        </a>
      </p>
    </div>
  );
};

AboutTabComponent.propTypes = {
  version: propTypes.string,
  isUpdateAvailable: propTypes.bool,
  isOnline: propTypes.bool,
};

export default AboutTabComponent;
