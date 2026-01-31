import React from "react";

const GOOGLE_FORM_URL = "https://forms.gle/phbTFA1rPunpGatB7";

type Step = {
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    title: "1) Submit a request",
    desc: "Use the Google Form to share what you want printed, your deadline, and any files/links (STL, image, sketch, etc.).",
  },
  {
    title: "2) Design Phase",
    desc: "We’ll check size, printability, and any design constraints. If anything needs adjusting, we’ll reach out with options.",
  },
  {
    title: "3) Quote Generated",
    desc: "We will generate and send a quote to the requester, awaiting confirmation.",
  },
  {
    title: "4) We print",
    desc: "Once confirmed, we add it to the print queue and start production.",
  },
  {
    title: "5) Delivery/Pickup",
    desc: "You’ll get a message when it’s ready for pickup. Staff members can expect delivery to their mailboxes depending on the size and quantity of item(s).",
  },
];

// const guidelines: Step[] = [
//   {
//     title: "Filament Multiplier",
//     desc: "STL/OBJ is ideal. If you don’t have one, send a sketch/photo and approximate dimensions.",
//   },
//   {
//     title: "Design Service",
//     desc: "Share the expected size (mm/cm) and how it will be used (held, hung, mounted, etc.).",
//   },
//   {
//     title: "Deadline matters",
//     desc: "Prints run on a queue — the earlier we know the timeline, the better.",
//   },
//   {
//     title: "Iterate if needed",
//     desc: "Prototypes are normal. We can tweak and reprint if changes are required.",
//   },
// ];

export default function PrintingServicePage(): JSX.Element {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.heroCard}>
            <div style={styles.badge}>🖨️ 3D Printing Service</div>
            <h1 style={styles.h1}>Bring your idea to life with our 3D printers.</h1>
            <p style={styles.subtext}>
              Need something for your classroom, a club project, or an event? Submit a request and we’ll
              help you go from idea → model → print.
            </p>

            <div style={styles.ctaRow}>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                style={{ ...styles.button, ...styles.buttonPrimary }}
              >
                Submit a Print Request →
              </a>

              <a href="#how-it-works" style={styles.button}>
                How it works
              </a>
            </div>

            <p style={styles.note}>
              Don’t have a 3D model yet? That’s okay! Send what you have and we’ll start from there.
            </p>
          </div>

          <aside style={styles.sideCard}>
            <h2 style={styles.h2}>Items we&apos;ve made</h2>
            <ul style={styles.ul}>
              <li style={styles.li}>Classroom tools</li>
              <li style={styles.li}>Club items (keychains, tokens, small merch)</li>
              <li style={styles.li}>Awards and trophies</li>
              <li style={styles.li}>Prototype / replacement parts</li>
            </ul>
          </aside>
        </section>

        {/* How it works */}
        <section id="how-it-works" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.h2}>How the service works</h2>
            <p style={styles.sectionSubtext}>A simple process with clear communication.</p>
          </div>

          <div style={styles.flexGrid}>
            {steps.map((s) => (
              <div key={s.title} style={styles.card}>
                <h3 style={styles.h3}>{s.title}</h3>
                <p style={styles.p}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Model */}
        <section style={styles.section}>
            <div style={styles.sectionHeader}>
                <h2 style={styles.h2}>Cost Model</h2>
                <p style={styles.sectionSubtext}>
                Pricing varies based on who is submitting the request.
                </p>
            </div>

            <div style={styles.costTable}>
                {/* Row 1: headers/icons */}
                <div style={styles.cellLabelHeader}></div>

                <div style={styles.cellHeader}>
                <div style={{ fontSize: 42 }}>👤</div> 
                <div style={styles.headerTitle}>Individuals</div>
                </div>

                <div style={styles.cellHeader}>
                <div style={{ fontSize: 42 }}>👥</div>
                <div style={styles.headerTitle}>Clubs & Programs</div>
                </div>

                <div style={styles.cellHeader}>
                <div style={{ fontSize: 42 }}>🏛️</div>
                <div style={styles.headerTitle}>Departments</div>
                </div>

                {/* Row: group descriptions */}
                {/* Row: Who this is for */}
                <div style={styles.cellLabel}>Who this is for</div>

                <div style={styles.descCell}>
                Students or Staff requesting a print for personal use. This may include items
                to support or enhance school work such as assignments or projects.
                </div>

                <div style={styles.descCell}>
                Students or Staff Advisors requesting prints for a club or program, with approval from their
                staff advisor. Items may be produced for members or promotional purposes.
                </div>

                <div style={styles.descCell}>
                Staff requesting prints for departmental use or to support teaching and
                learning in their classrooms.
                </div>

                {/* Row 2 */}
                <div style={styles.cellLabel}>Filament Multiplier</div>
                <div style={styles.cell}>× 2</div>
                <div style={styles.cell}>× 1.25</div>
                <div style={styles.cell}>× 1</div>

                {/* Row 3 */}
                <div style={styles.cellLabel}>Design Service</div>
                <div style={styles.cell}>❌</div>
                <div style={styles.cell}>✅ Flat rate $25</div>
                <div style={styles.cell}>✅ Fee waived</div>

                {/* Row 4 */}
                <div style={styles.cellLabel}>Payment Model</div>
                <div style={styles.cell}>
                Higher of per weight (0.03/g) <br /> or per time (0.018/min)
                </div>
                <div style={styles.cell}>
                Higher of per weight (0.03/g) <br /> or per time (0.018/min)
                </div>
                <div style={styles.cell}>
                Higher of per weight (0.03/g) <br /> or per time (0.018/min)
                </div>

                {/* Row 5 */}
                <div style={styles.cellLabel}>Payment Method</div>
                <div style={styles.cell}>Cash</div>
                <div style={styles.cell}>School Transfer*</div>
                <div style={styles.cell}>School Transfer*</div>
            </div>

            <p style={styles.footnote}>
                *Transfers are made to the Computer Science Department.
            </p>
            </section>


        {/* Final CTA */}
        <section style={styles.section}>
          <div style={styles.footerCta}>
            <div>
              <h2 style={{ ...styles.h2, margin: 0 }}>Ready to submit?</h2>
              <p style={{ ...styles.sectionSubtext, margin: "6px 0 0" }}>
                Submit a print request and we’ll take it from there!
              </p>
            </div>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.button, ...styles.buttonPrimary }}
            >
              Submit a Print Request →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

const MAROON = {
  primary: "#7f1d1d",                 // maroon-800
  strong: "#991b1b",                  // maroon-700
  softBg: "rgba(127,29,29,0.06)",     
  border: "rgba(127,29,29,0.28)",
  borderStrong: "rgba(127,29,29,0.38)",
  textMuted: "rgba(255,255,255,0.75)",
  surface: "rgba(26,26,34,0.68)",     
  surfaceAlt: "rgba(32,32,42,0.62)",
};

export const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(900px 600px at 15% 10%, rgba(127,29,29,0.18), transparent 55%)," +
      "radial-gradient(900px 600px at 85% 20%, rgba(127,29,29,0.12), transparent 55%)," +
      "#16181f",
    padding: "48px 16px",
    display: "flex",
    justifyContent: "center",
    color: "rgba(255,255,255,0.92)",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: 980,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    gap: 18,
    alignItems: "stretch",
  },

  heroCard: {
    flex: "1 1 560px",
    padding: 28,
    borderRadius: 20,
    border: `1px solid ${MAROON.borderStrong}`,
    background: MAROON.surfaceAlt,
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
  },

  sideCard: {
    flex: "1 1 280px",
    padding: 24,
    borderRadius: 20,
    border: `1px solid ${MAROON.border}`,
    background: MAROON.surface,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    borderRadius: 999,
    border: `1px solid ${MAROON.border}`,
    background: MAROON.softBg,
    color: "rgba(239,68,68,0.7)",
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 14,
  },

  h1: {
    margin: "0 0 10px",
    fontSize: 36,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },

  subtext: {
    margin: "0 0 18px",
    color: MAROON.textMuted,
    lineHeight: 1.6,
    fontSize: 16,
  },

  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "12px 18px",
    borderRadius: 14,
    border: `1px solid ${MAROON.border}`,
    background: "rgba(255,255,255,0.03)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontWeight: 800,
  },

  buttonPrimary: {
    background: MAROON.primary,
    border: `1px solid ${MAROON.strong}`,
    color: "#fff",
    boxShadow: "0 6px 20px rgba(127,29,29,0.35)",
  },

  note: {
    margin: "12px 0 0",
    color: MAROON.textMuted,
    fontSize: 13,
    lineHeight: 1.45,
  },

  section: {
    padding: 24,
    borderRadius: 20,
    border: `1px solid ${MAROON.border}`,
    background: MAROON.surface,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  sectionHeader: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },

  sectionSubtext: {
    margin: 0,
    color: MAROON.textMuted,
    lineHeight: 1.5,
  },

  flexGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
  },

  card: {
    flex: "1 1 260px",
    minHeight: 120,
    padding: 18,
    borderRadius: 18,
    border: `1px solid ${MAROON.border}`,
    background: "rgba(255,255,255,0.035)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
  },

  h2: {
    margin: 0,
    fontSize: 18,
    letterSpacing: "-0.01em",
  },

  h3: {
    margin: "0 0 8px",
    fontSize: 15,
  },

  p: {
    margin: 0,
    color: MAROON.textMuted,
    lineHeight: 1.5,
    fontSize: 14,
  },

  ul: {
    margin: "10px 0 0",
    padding: "0 0 0 18px",
    color: MAROON.textMuted,
    lineHeight: 1.55,
  },

  li: {
    marginBottom: 8,
  },

  footerCta: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },

  /* ===== COST MODEL TABLE ===== */

  costTable: {
    display: "grid",
    gridTemplateColumns: "240px 1fr 1fr 1fr",
    gap: 14,
    marginTop: 18,
    width: "100%",
    overflowX: "auto",
  },

  cellHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 18,
    borderRadius: 18,
    border: `1px solid ${MAROON.border}`,
    background: MAROON.softBg,
    textAlign: "center",
    minHeight: 120,
  },

  headerTitle: {
    fontWeight: 800,
    color: "rgba(255,255,255,0.95)",
  },

  costIcon: {
    width: 64,
    height: 64,
  },

  cellLabel: {
    display: "flex",
    alignItems: "center",
    padding: "0 6px",
    color: "rgba(255,255,255,0.8)",
    fontWeight: 800,
    minHeight: 56,
  },

  cell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    borderRadius: 18,
    border: `1px solid ${MAROON.border}`,
    background: "rgba(255,255,255,0.035)",
    color: "rgba(255,255,255,0.92)",
    fontSize: 14,
    lineHeight: 1.45,
    textAlign: "center",
    minHeight: 56,
  },

  descCell: {
    padding: "16px",
    borderRadius: 18,
    border: `1px dashed ${MAROON.borderStrong}`,
    background: MAROON.softBg,
    color: "rgba(255,255,255,0.88)",
    fontSize: 14,
    lineHeight: 1.5,
    display: "flex",
    alignItems: "center",
  },

  footnote: {
    marginTop: 14,
    fontSize: 14,
    color: "rgba(239,68,68,0.7)",          // light maroon (red-300)
    lineHeight: 1.5,
  },

};
