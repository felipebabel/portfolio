import styles from './experience.module.css';

export default function Experiences() {
  const experiencesData = [
    {
      id: 1,
      role: 'Software Engineer - Philips',
      period: '2022 - currently',
      description:
        'As a software engineer, I am responsible for maintaining and developing integrations between healthcare systems using HL7, JSON, and HL7 FHIR formats in internal and microservices architectures.',
      highlights: [
        {
          title: 'Performance Optimization:',
          text: 'Successfully improved product performance by optimizing screen loading time, reducing it by approximately 66% (from 12 seconds to 4 seconds). This achievement met critical functional requirements and significantly enhanced the user experience.',
        },
        {
          title: 'Security Implementation:',
          text: 'Played a key role in implementing authentication for the product, addressing essential security needs to protect functionalities and prevent unauthorized third-party access.',
        },
      ],
      logoSrc: '/assets/images/philips.jpg',
      logoAlt: 'Philips Logo',
    },
    {
      id: 2,
      role: 'R&D Intern - Philips',
      period: '2021 - 2022',
      description:
        'As an R&D Software Developer Intern at Philips, I contributed to maintaining healthcare system integrations and implementing continuous improvements within a monolithic architecture, focusing on enhancing system performance and reliability.',
      highlights: [
        {
          title: 'Maintained and Optimized Integrations:',
          text: 'Worked on maintaining and optimizing healthcare system integrations using JSON to ensure seamless data exchange and system interoperability.',
        },
        {
          title: 'System Enhancement and Functionality Improvements:',
          text: 'Analyzed requirements and implemented targeted enhancements to improve system functionality, ensuring better performance and reliability.',
        },
      ],
      logoSrc: '/assets/images/philips.jpg',
      logoAlt: 'Philips Logo',
    },
  ];

  return (
    <section className={`container ${styles.experiences}`} id="experiences">
       <span className={styles.anchor}></span>
      <h2 className={styles.headerexperiences}>EXPERIENCES</h2>
      <p className="sub-header"></p>
      <div className={styles.experiences}>
        {experiencesData.map((exp) => (
          <div key={exp.id} className={styles.card}>
            <div className="content">
              <div className="flex-container" style={{ display: 'flex', gap: '1rem' }}>
                <div className={styles.navLogoPhilips}>
                  <img src={exp.logoSrc} alt={exp.logoAlt} />
                </div>
                <div className={styles.text}>
                  <p className={styles.cardParagraph}>{exp.role}</p>
                  <p className={styles.cardParagraph}>{exp.period}</p>
                  <p className={styles.cardParagraph}>{exp.description}</p>
                  <p className={styles.cardParagraph}>Key Highlights:</p>
                  <ul className={styles.list}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} className={styles.listItem}>
                        <strong>{h.title}</strong> {h.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
