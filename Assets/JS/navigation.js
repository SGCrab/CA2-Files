(() => {
  const headers = document.querySelectorAll('header > ul.nav-bar');

  headers.forEach((navList, index) => {
    const header = navList.parentElement;

    Array.from(header.children)
      .filter((item) => item !== navList && item.classList?.contains('dropdown'))
      .forEach((dropdown) => {
        const listItem = document.createElement('li');
        listItem.className = 'ms-2';
        listItem.append(dropdown);
        navList.append(listItem);
      });

    Array.from(navList.children).forEach((item) => {
      if (item.tagName !== 'LI') {
        const listItem = document.createElement('li');
        listItem.className = 'ms-2';
        item.before(listItem);
        listItem.append(item);
      }
    });

    navList.querySelectorAll('ul.dropdown-menu').forEach((menu) => {
      menu.classList.remove('dropdown:hover');
    });

    const socialDropdown = Array.from(navList.querySelectorAll('.dropdown')).find(
      (dropdown) => dropdown.querySelector('.dropdown-toggle')?.textContent.trim() === 'Socials'
    );

    const socialMenu = socialDropdown?.querySelector('.dropdown-menu');
    if (socialMenu) {
      socialMenu.replaceChildren(...['X - coming soon', 'Instagram - coming soon'].map((label) => {
        const item = document.createElement('li');
        const text = document.createElement('span');
        text.className = 'dropdown-item-text text-white-50';
        text.textContent = label;
        item.append(text);
        return item;
      }));
    }

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
