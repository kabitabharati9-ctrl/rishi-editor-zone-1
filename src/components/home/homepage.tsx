import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Clapperboard,
  Film,
  Layers3,
  MonitorPlay,
  MoveUpRight,
  Sparkles,
  WandSparkles,
  Workflow,
} from "lucide-react";
import { INSTAGRAM_LINK, WHATSAPP_LINK } from "@/lib/contact-links";
import { PageEffects } from "./page-effects";
import styles from "./home.module.css";

const services = [
  {
    number: "01",
    title: "Reels Editing",
    description: "Fast-moving cuts, captions, and pacing made for the scroll.",
    icon: Clapperboard,
  },
  {
    number: "02",
    title: "Cinematic Editing",
    description: "A considered cut, rich color, and a story that stays with you.",
    icon: Film,
  },
  {
    number: "03",
    title: "VFX",
    description: "Visual details and effects that give an idea another dimension.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Photo Editing",
    description: "A clean, confident finish that brings every frame into focus.",
    icon: WandSparkles,
  },
  {
    number: "05",
    title: "Motion Graphics",
    description: "Type and movement with a clear point of view.",
    icon: Workflow,
  },
];

const workPreviews = [
  {
    number: "01",
    category: "REELS EDITING",
    title: "Your next reel, in motion.",
    description: "A short-form preview will appear here.",
    style: styles.previewReel,
    icon: MonitorPlay,
  },
  {
    number: "02",
    category: "CINEMATIC EDITING",
    title: "Your story, frame by frame.",
    description: "A cinematic preview will appear here.",
    style: styles.previewCinema,
    icon: Film,
  },
  {
    number: "03",
    category: "VFX + MOTION",
    title: "A little more unreal.",
    description: "An effects preview will appear here.",
    style: styles.previewEffects,
    icon: Layers3,
  },
];

export function Homepage() {
  return (
    <div className={styles.page} id="top">
      <PageEffects />
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="Rishi Editor Zone home">
            <span className={styles.brandMark} aria-hidden="true">
              RZ
            </span>
            <span className={styles.brandName}>
              RISHI <span>EDITOR ZONE</span>
            </span>
          </a>

          <nav className={styles.navigation} aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className={styles.headerCta} href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Start a project <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroMedia} aria-hidden="true">
            <Image
              className={styles.heroImage}
              src="/rishi-edit-suite.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            <div className={styles.heroShade} />
          </div>

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.liveMark} />
                INDEPENDENT VIDEO EDITING STUDIO
              </p>
              <h1 className={styles.heroTitle} id="hero-title">
                RISHI
                <br />
                EDITOR
                <br />
                <span>ZONE</span>
              </h1>
              <p className={styles.heroTagline}>YOUR VISION. OUR EDIT.</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#work">
                  VIEW MY WORK <ArrowDownRight size={17} strokeWidth={1.8} />
                </a>
                <a
                  className={styles.secondaryButton}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  ORDER AN EDIT <ArrowUpRight size={17} strokeWidth={1.8} />
                </a>
              </div>
            </div>

            <div className={styles.heroAside} aria-hidden="true">
              <span>RZ / 001</span>
              <span>THE EDIT STARTS HERE</span>
            </div>

            <a className={styles.scrollCue} href="#services">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={14} strokeWidth={1.7} />
            </a>
          </div>
        </section>

        <div className={styles.serviceTicker} aria-label="Video editing services">
          <div className={styles.tickerTrack} aria-hidden="true">
            {Array.from({ length: 2 }, (_, index) => (
              <span className={styles.tickerGroup} key={index}>
                <span>REELS</span>
                <i />
                <span>CINEMATIC</span>
                <i />
                <span>VFX</span>
                <i />
                <span>PHOTO</span>
                <i />
                <span>MOTION GRAPHICS</span>
                <i />
              </span>
            ))}
          </div>
        </div>

        <section className={styles.section} id="services" aria-labelledby="services-title">
          <div className={styles.sectionIntro} data-reveal>
            <div>
              <p className={styles.sectionLabel}>01 / THE SERVICES</p>
              <h2 className={styles.sectionTitle} id="services-title">
                MADE TO MOVE <span>YOU.</span>
              </h2>
            </div>
            <p className={styles.sectionSummary}>
              From a single frame to the final cut, every detail has a reason to be there.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  className={styles.serviceCard}
                  href="#contact"
                  key={service.number}
                  data-reveal
                >
                  <div className={styles.serviceCardTop}>
                    <span className={styles.serviceNumber}>{service.number}</span>
                    <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className={styles.serviceCardBottom}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className={styles.serviceLink}>
                      EXPLORE SERVICE <MoveUpRight size={14} strokeWidth={1.7} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className={styles.workSection} id="work" aria-labelledby="work-title">
          <div className={styles.section}>
            <div className={styles.sectionIntro} data-reveal>
              <div>
                <p className={styles.sectionLabel}>02 / THE WORK</p>
                <h2 className={styles.sectionTitle} id="work-title">
                  NEXT UP: <span>YOUR EDIT.</span>
                </h2>
              </div>
              <p className={styles.sectionSummary}>
                Preview frames are standing by for the stories we make together.
              </p>
            </div>

            <div className={styles.workGrid}>
              {workPreviews.map((preview) => {
                const Icon = preview.icon;

                return (
                  <article className={styles.workCard} key={preview.number} data-reveal>
                    <div className={`${styles.previewFrame} ${preview.style}`}>
                      <div className={styles.previewHeader}>
                        <span>RZ / PREVIEW {preview.number}</span>
                        <span>00:00:00:00</span>
                      </div>
                      <div className={styles.previewStage}>
                        <div className={styles.previewArtwork}>
                          <span className={styles.previewArtworkLine} />
                          <span className={styles.previewArtworkOrb} />
                          <span className={styles.previewArtworkLabel}>YOUR NEXT FRAME</span>
                        </div>
                        <span className={styles.previewPlay} aria-hidden="true">
                          <Icon size={20} strokeWidth={1.4} />
                        </span>
                      </div>
                      <div className={styles.previewTimeline} aria-hidden="true">
                        <span className={styles.timelineTrack}>
                          <i />
                          <i />
                          <i />
                        </span>
                        <span className={styles.timelineTrack}>
                          <i />
                          <i />
                        </span>
                        <span className={styles.timelineTrack}>
                          <i />
                        </span>
                      </div>
                      <span className={styles.previewStatus}>VIDEO PREVIEW / COMING SOON</span>
                    </div>
                    <div className={styles.workCardInfo}>
                      <div>
                        <p className={styles.workCategory}>{preview.category}</p>
                        <h3>{preview.title}</h3>
                        <p className={styles.workDescription}>{preview.description}</p>
                      </div>
                      <span className={styles.workNumber}>{preview.number}</span>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className={styles.previewNote}>
              These are preview placeholders, not finished client projects.
            </p>
          </div>
        </section>

        <section className={styles.approachSection} id="approach" aria-labelledby="approach-title">
          <div className={styles.section}>
            <div className={styles.approachHeading} data-reveal>
              <p className={styles.sectionLabel}>03 / THE APPROACH</p>
              <h2 className={styles.sectionTitle} id="approach-title">
                GOOD EDITS <span>START WITH YOU.</span>
              </h2>
              <p className={styles.sectionSummary}>
                Bring the footage, the feeling, or just the first idea. We&apos;ll shape the next
                frame together.
              </p>
            </div>

            <ol className={styles.approachSteps}>
              <li data-reveal>
                <span>01</span>
                <div>
                  <h3>Share the vision</h3>
                  <p>Tell us what you&apos;re making and where you want it to go.</p>
                </div>
              </li>
              <li data-reveal>
                <span>02</span>
                <div>
                  <h3>Shape the cut</h3>
                  <p>We find the rhythm, look, and details that fit your story.</p>
                </div>
              </li>
              <li data-reveal>
                <span>03</span>
                <div>
                  <h3>Get it out there</h3>
                  <p>Your finished edit is ready for the place it was made to live.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactInner} data-reveal>
            <div className={styles.contactCopy}>
              <p className={styles.sectionLabel}>04 / YOUR MOVE</p>
              <h2 className={styles.contactTitle} id="contact-title">
                LET&apos;S MAKE
                <br />
                YOUR NEXT ONE
                <br />
                <span>UNMISSABLE.</span>
              </h2>
              <p className={styles.contactSummary}>
                Tell us what you&apos;re working on. We&apos;ll take it from the first idea to the final
                frame.
              </p>
              <div className={styles.contactActions}>
                <a className={styles.primaryButton} href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  ORDER AN EDIT <ArrowUpRight size={17} strokeWidth={1.8} />
                </a>
                <a className={styles.socialLink} href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
                  <span className={styles.socialMark} aria-hidden="true">
                    IG
                  </span>
                  INSTAGRAM <ArrowUpRight size={14} strokeWidth={1.7} />
                </a>
              </div>
              <p className={styles.contactNote}>
                WhatsApp opens a prefilled message. Add your Instagram profile link when you&apos;re
                ready.
              </p>
            </div>
            <div className={styles.contactStamp} aria-hidden="true">
              <span>YOUR VISION</span>
              <span className={styles.stampSlash}>/</span>
              <span>OUR EDIT</span>
              <span className={styles.stampIndex}>RZ—001</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#top">
          RISHI EDITOR ZONE
        </a>
        <span>YOUR VISION. OUR EDIT.</span>
        <a href="#top" className={styles.backToTop}>
          BACK TO TOP <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>
      </footer>
    </div>
  );
}
