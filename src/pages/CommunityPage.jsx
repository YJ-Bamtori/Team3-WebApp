import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomNav from "../organisms/BottomNav";
import CommunityListSection from "../organisms/CommunityListSection";
import TabNavigation from "../molecules/TabNavigation ";
import TitleHeader from "../molecules/TitleHeader";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 402px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-family: Pretendard;
  background-color: #fff;

  position: relative;
`;

const StatusBar = styled.div`
  width: 402px;
  height: 50px;
  background: #fff;

  position: sticky;
  top: 0;
  z-index: 10;

  & > img {
    width: 100%;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 260px 0 210px;
  color: #66686e;
  font-size: 14px;
  text-align: center;
  line-height: 1.3;
`;

const FloatingButton = styled.button`
  display: flex;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 1000px;
  background: var(--BLUE-BLUE01, #4284ff);

  position: fixed;
  bottom: 106px;
  right: 50%;
  transform: translateX(181px);

  cursor: pointer;
`;

function CommunityPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("review");

  return (
    <PageWrapper>
      <StatusBar>
        <img src={import.meta.env.BASE_URL + "/StatusBar.png"} alt="StatusBar"></img>
      </StatusBar>
      <TitleHeader
        state="Title"
        title="커뮤니티"
        rightIcon={<img src={import.meta.env.BASE_URL + "/search.svg"} alt="search" />}
      />
      {/* 탭네비 */}
      <TabNavigation
        activeKey={activeTab}
        onChange={setActiveTab}
        tabs={[
          { key: "review", label: "후기" },
          { key: "question", label: "질문" },
        ]}
      />
      {activeTab === "review" ? (
        <CommunityListSection />
      ) : (
        <EmptyState>
          {/* <img
            src="/empty-state.svg"
            alt="질문 없음"
            style={{ width: "120px", marginBottom: "20px" }}
          /> */}
          <p>아직 질문이 없어요</p>
          <p>첫 번째 질문을 남겨보세요!</p>
        </EmptyState>
      )}

      <FloatingButton onClick={() => navigate("/selectGongu")}>
        <img src={import.meta.env.BASE_URL + "/plus.svg"} alt="" />
      </FloatingButton>
      <BottomNav />
    </PageWrapper>
  );
}

export default CommunityPage;
