import './footer.css';
export default {
  title: "Components/Footer",
  parameters: {
    docs: { description: { component: "Site footer with navigation links and copyright. Skeleton — real content and design to be added." } },
    status: "wip",
  },
  tags: ["UI","navigation","layout"],
};

export const Default = () => `<footer class="c-footer">

  <nav class="c-footer__links" aria-label="Sidfotslänkar">
    <a href="/kontakt/">Kontakta oss</a>
    <a href="/upplagor/">Tidigare upplagor av stämman</a>
    <a href="/sitemap.xml">Sitemap</a>
  </nav>

  <p class="c-footer__copyright">&copy; 2026 Bingsjöstämman</p>

</footer>
`;
Default.storyName = "Default";