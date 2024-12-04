import React from 'react';
import { Link } from 'react-router-dom';

const NotConvinced: React.FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0, // Optional: for smooth scrolling
        });
      };

  return (
    <section className="not-convinced">
      <h2>아직 쓰기 망설여 지나요?</h2>
      <p>데모 페이지를 통해 어떻게 사용할 수 있는 지 확인해보세요.</p>
      <Link to="/suggestions">
      <button onClick={handleScrollToTop}>데모 살펴보기 ✨</button>
      </Link>
    </section>
  );
};

export default NotConvinced;