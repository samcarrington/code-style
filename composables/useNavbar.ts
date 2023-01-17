export default function () {
  const show = useState('navbar', () => false);

  // @ts-ignore
  function toggleNav() {
    show.value = !show.value;
  }

  return {
    show,
    toggleNav,
  };
}
