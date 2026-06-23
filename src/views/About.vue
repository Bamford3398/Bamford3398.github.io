<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-container">
        <header class="about-intro">
          <h1 class="page-title">About WASP</h1>
          <p class="about-text">
            WASP is a specialist intelligent pigging and integrity assessment company, founded by
            senior figures from the global ILI industry.
          </p>
          <p class="about-text">
            Our inspection engineers have spent careers working across refining, petrochemical,
            power generation and industrial sectors. Every project is led by qualified ultrasonic
            pigging specialists who know the technology and the operational reality of the assets
            they're inspecting — not just in theory, but from decades of doing it.
          </p>
          <p class="about-text">
            With over 75 years of combined experience and operations completed in 40+ countries,
            we built WASP to do one thing properly: give clients accurate, actionable data on the
            condition of their assets.
          </p>
        </header>

        <section class="content-section">
          <h2 class="section-title">Our approach</h2>
          <ul class="approach-list">
            <li v-for="item in approachItems" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="content-section team-intro">
          <h2 class="section-title">Meet the team</h2>
          <p class="about-text">
            WASP is a new company. The people behind it are not.
          </p>
          <p class="about-text">
            Our leadership team has held senior positions at the highest levels of the global
            intelligent pigging industry, and played a direct role in developing the technology and
            operational standards the sector relies on today.
          </p>
        </section>

        <section class="team-members">
          <article
            v-for="(member, index) in teamMembers"
            :key="member.id"
            class="team-member"
            :class="{ 'team-member--reversed': index % 2 === 1 }"
          >
            <div class="team-member-content">
              <h3 class="team-member-name">
                {{ member.name }} — {{ member.role }}
              </h3>
              <p
                v-for="(paragraph, paragraphIndex) in member.paragraphs"
                :key="paragraphIndex"
                class="about-text"
              >
                {{ paragraph }}
              </p>
            </div>

            <div class="team-member-image-wrap">
              <img
                v-if="member.image"
                :src="member.image"
                :alt="member.name"
                class="team-member-image"
              />
              <div v-else class="team-image-placeholder" aria-hidden="true">
                <span class="team-image-placeholder-text">Photo coming soon</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
const approachItems = [
  'Specialist inspection engineers, not generalists',
  'Full project management from cleaning through to final integrity assessment',
  'Working to API RP 573, API 579 / ASME FFS-1, API 1163 and POF 100 | 300 | 500',
  'Interactive 3D digital reporting — data you can interrogate, not just read'
]

const teamMembers = [
  {
    id: 'david-thewsey',
    name: 'Dr David Thewsey',
    role: 'Chief Executive Officer',
    image: null,
    paragraphs: [
      'David is a recognised leader in inline inspection (ILI) technology, with more than 15 years of senior leadership experience across some of the industry\'s leading inspection companies. His career has included roles as Chief Technology Officer, Technical Director, Executive Director and Managing Director, spanning technology development, commercial growth and international business leadership.',
      'He holds a PhD in Materials Science and Engineering, a first-class degree in Electronic Engineering and is a Chartered Engineer. Throughout his career, David has led the development and commercialisation of multiple inspection technologies, taking products from initial concept through to successful deployment in global markets.',
      'At WASP, David leads the company\'s strategic direction, commercial activities and technology vision, working closely with clients and partners to deliver innovative inspection solutions.'
    ]
  },
  {
    id: 'ryan-caird',
    name: 'Ryan Caird',
    role: 'Chief Operating Officer',
    image: null,
    paragraphs: [
      'Ryan combines extensive international field experience with deep expertise in intelligent pig design, mechanical engineering and asset integrity. Over his career, he has been directly involved in more than 100 inspection operations across 40+ countries, giving him a practical understanding of the challenges faced by operators in a wide range of industries and environments.',
      'Alongside his operational experience, Ryan has played a central role in the design, development and deployment of multiple ILI systems. His expertise spans mechanical design, structural modelling, engineering analysis and technology development, ensuring that inspection tools are engineered not only to perform in theory, but to deliver reliable results in the field.',
      'At WASP, Ryan leads engineering, technology development and operational execution, ensuring every solution is designed to meet the highest technical standards.'
    ]
  },
  {
    id: 'gray-dessington',
    name: 'Gray Dessington',
    role: 'Business Operations Manager',
    image: '/gray-dessington.png',
    paragraphs: [
      'Gray brings more than 12 years of inline inspection experience, having progressed from field technician to senior leadership positions within one of the industry\'s leading specialist inspection providers. During his career, he has been involved in 200+ inspection operations across five continents, supporting projects in the refining, petrochemical, power generation and pipeline sectors.',
      'In addition to extensive field experience, Gray spent several years leading inspection operations, overseeing project planning, resource management, client liaison, personnel development and technical delivery. As Inspection Business Lead, he was responsible for the day-to-day management of the inspection department, ensuring projects were executed safely, efficiently and to specification.',
      'At WASP, Gray is responsible for business operations and project delivery, ensuring that every project is properly planned, resourced and executed from initial enquiry through to final reporting.'
    ]
  }
]
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #0a0a0a;
  padding-top: 80px;
}

.about-hero {
  padding: 64px 0 80px;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.page-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 32px;
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2rem);
  font-weight: 700;
  color: #D4AF37;
  line-height: 1.2;
  margin-bottom: 24px;
}

.about-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  margin-bottom: 20px;
}

.about-text:last-child {
  margin-bottom: 0;
}

.content-section {
  margin-top: 48px;
}

.approach-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.approach-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
}

.approach-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #D4AF37;
}

.approach-list li:last-child {
  margin-bottom: 0;
}

.team-intro {
  max-width: 800px;
}

.team-members {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.team-member {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.team-member--reversed .team-member-content {
  order: 2;
}

.team-member--reversed .team-member-image-wrap {
  order: 1;
}

.team-member-name {
  font-size: 1.35rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.35;
  margin-bottom: 20px;
}

.team-member-image-wrap {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
  aspect-ratio: 3 / 4;
  background-color: #141414;
}

.team-member-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.team-image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
}

.team-image-placeholder-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .about-page {
    padding-top: 70px;
  }

  .about-hero {
    padding: 48px 0 64px;
  }

  .about-container {
    padding: 0 16px;
  }

  .page-title {
    margin-bottom: 24px;
  }

  .content-section {
    margin-top: 40px;
  }

  .about-text,
  .approach-list li {
    font-size: 0.95rem;
  }

  .team-members {
    margin-top: 40px;
    gap: 48px;
  }

  .team-member,
  .team-member--reversed {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .team-member--reversed .team-member-content,
  .team-member--reversed .team-member-image-wrap {
    order: unset;
  }

  .team-member-image-wrap {
    max-width: 360px;
  }

  .team-member-name {
    font-size: 1.2rem;
  }
}
</style>
