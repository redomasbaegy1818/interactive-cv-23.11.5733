const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMK Muhammadiyah 1 Yogyakarta', major: 'MULTIMEDIA' },
    { id: 3, period: '2018 - 2020', institution: 'SMP Muhammadiyah 7 Yogyakarta', major: 'TIK' },
    { id: 4, period: '2012 - 2018', institution: 'SD Muhammadiyah Sapen Yogyakarta', major: '-' },
  ];
  
  const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
  ];
  
  const projects = [
    {
      title: 'Seminar Pengantar Pemrograman Web',
      image: 'https://tse2.mm.bing.net/th/id/OIP.dhlgZsYhDRYhEMTVa9iopAHaFM?pid=Api&P=0&h=180',
      description: 'Seminar Pengantar Pemrograman Web Di Desa.',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Aplikasi Manajemen Es Kimo',
      image: 'https://tse3.mm.bing.net/th/id/OIP.q1CrXjcaCzHDxi4ZeLin4gAAAA?pid=Api&P=0&h=180',
      description: 'Aplikasi untuk manajemen penjualan es kimo.',
      tech: ['React', 'Firebase'],
      link: '#'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };