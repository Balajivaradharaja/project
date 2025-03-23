import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Shield, Users, Bell, ArrowRight } from "lucide-react";

const DashboardContainer = styled.main`
  margin-top: 70px;
`;

const HeroSection = styled.div`
  background-color: ${({ theme }) => theme?.background || "#f9f9f9"};
  padding: 6rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.text || "#222"};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.secondary || "#666"};
`;

const CTAButton = styled.button`
  background-color: ${({ theme }) => theme?.primary || "#3b82f6"};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const DashboardImage = styled.div`
  background: ${({ theme }) => theme?.surface || "#fff"};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme?.shadow || "0 4px 12px rgba(0, 0, 0, 0.1)"};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: ${({ theme }) => theme?.surface || "#fff"};
`;

const StatCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme?.background || "#f9f9f9"};
  box-shadow: ${({ theme }) => theme?.shadow || "0 4px 12px rgba(0, 0, 0, 0.1)"};
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme?.primary || "#3b82f6"};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme?.secondary || "#666"};
  font-size: 0.875rem;
`;

const data = [
  { name: "Jan", consents: 400 },
  { name: "Feb", consents: 300 },
  { name: "Mar", consents: 600 },
  { name: "Apr", consents: 800 },
  { name: "May", consents: 500 },
];

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <HeroSection>
        <HeroContent>
          <Title>Secure Data & Privacy, Simplified</Title>
          <Subtitle>
            Our platform empowers you to manage privacy compliance with complete
            visibility and control. Streamline risk management, enforce
            compliance, and protect user data effortlessly.
          </Subtitle>
          <CTAButton aria-label="Get Started">
            Get Started <ArrowRight size={20} />
          </CTAButton>
        </HeroContent>
        <DashboardImage>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="consents" fill="#3b82f6" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </DashboardImage>
      </HeroSection>

      <StatsGrid>
        <StatCard>
          <StatValue>98%</StatValue>
          <StatLabel>Compliance Score</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>12,453</StatValue>
          <StatLabel>Protected Users</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>99.9%</StatValue>
          <StatLabel>Uptime Guarantee</StatLabel>
        </StatCard>
      </StatsGrid>
    </DashboardContainer>
  );
};
