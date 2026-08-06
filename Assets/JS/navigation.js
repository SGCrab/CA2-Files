(() => {
  const headers = document.querySelectorAll('header > ul.nav-bar');

  headers.forEach((navList, index) => {
    const header = navList.parentElement;
    const logoItem = navList.querySelector(':scope > li:first-child');
    const brand = logoItem?.querySelector('a');
    const navigationId = `primary-navigation-${index + 1}`;

    const navigation = document.createElement('nav');
    navigation.className = 'site-nav';
    navigation.setAttribute('aria-label', 'Primary navigation');

    if (brand) {
      brand.classList.add('nav-brand');
      brand.setAttribute('aria-label', 'GACHARANT home');
      logoItem.remove();
      navigation.append(brand);
    }

    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', navigationId);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Toggle navigation');

    for (let line = 0; line < 3; line += 1) {
      toggle.append(document.createElement('span'));
    }

    const collapse = document.createElement('div');
    collapse.className = 'collapse nav-collapse';
    collapse.id = navigationId;

    collapse.append(navList);
    navigation.append(toggle, collapse);
    header.replaceChildren(navigation);

    toggle.addEventListener('click', () => {
      const isOpen = collapse.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
})();
