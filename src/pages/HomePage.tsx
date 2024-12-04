import React from 'react';
import Header from '../components/Header';
import SuggestionCard from '../components/SuggestionCard';
import HowItWorks from '../components/HowItWorks';
import WhyFeatureYard from '../components/WhyFeatureYard';
import NotConvinced from '../components/NotConvinced';
import '../App.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <section className="content-wrapper">
          <div className="suggestion-cards">
            <h2>최근 사용자가 요청한 기능</h2>
            <SuggestionCard title="홈 화면 커스텀" description="유저가 직접 자주 사용하는 기능을 홈 화면에 추가할 수 있도록 해주세요 :)" votes={121} />
            <SuggestionCard title="사진 공유 기능 추가" description="앱 내에서 사진이나 동영상을 빠르게 공유할 수 있는 기능이 필요해요 ㅠㅠ." votes={84} />
          </div>
          <div className="features">
            <h1 className="features-title">사용자의 피드백을 활용해 <br /> 더 나은 제품을 만들어 보세요</h1>
            <p>여러분의 제품에 대한 피드백을 한 곳에서 관리하면서 인사이트를 발견하고,
            가장 중요한 기능을 먼저 개발하세요.</p>
            <a href="https://forms.gle/m8xi5q85zP7v5oRR6" target="_blank" rel="noopener noreferrer">
              <button>무료로 시작하기✨</button>
            </a>
          </div>
        </section>
        <HowItWorks />
        <WhyFeatureYard />
        <NotConvinced />
      </main>
    </div>
  );
};

export default HomePage;