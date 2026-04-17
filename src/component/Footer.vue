<template>
    <footer class="bg-[#0f172a] text-slate-300 pt-16 pb-8 px-6 relative overflow-hidden">
        <!-- Subtle gradient decorations -->
        <div
            class="absolute top-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                <!-- Col 1: Brand -->
                <div>
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                            <span class="text-white font-extrabold text-lg">N</span>
                        </div>
                        <div>
                            <p class="font-bold text-white text-lg leading-none">Wannachol</p>
                            <p class="text-xs text-slate-500 leading-none mt-0.5">Full-Stack Developer</p>
                        </div>
                    </div>
                    <p class="text-sm text-slate-400 leading-relaxed">
                        Building scalable, data-driven applications that bridge business needs and high-performance
                        technical solutions.
                    </p>
                    <!-- Social Icons -->
                    <div class="flex gap-3 mt-6">
                        <a href="https://github.com/nat210b" target="_blank" rel="noopener noreferrer"
                            class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5">
                            <i class="fa-brands fa-github text-lg"></i>
                        </a>
                        <a href="mailto:Wannachol.pinprom@gmail.com"
                            class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5">
                            <i class="fa-solid fa-envelope text-sm"></i>
                        </a>
                        <a href="https://line.me/ti/p/~nat210b" target="_blank" rel="noopener noreferrer"
                            class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-green-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5">
                            <i class="fa-brands fa-line text-lg"></i>
                        </a>
                    </div>
                </div>

                <!-- Col 2: Quick Nav -->
                <div>
                    <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h4>
                    <ul class="space-y-3">
                        <li v-for="link in navLinks" :key="link.href">
                            <a :href="link.href"
                                class="text-sm text-slate-400 hover:text-white flex items-center gap-2 group transition-colors duration-200">
                                <span
                                    class="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Col 3: Contact Info -->
                <div>
                    <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
                    <ul class="space-y-4">
                        <li>
                            <a href="mailto:Wannachol.pinprom@gmail.com" class="flex items-start gap-3 group">
                                <div
                                    class="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5">
                                    <i
                                        class="fa-solid fa-envelope text-slate-400 group-hover:text-white text-xs transition-colors"></i>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-500 font-medium uppercase tracking-wide">Email</p>
                                    <p
                                        class="text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                                        Wannachol.pinprom@gmail.com
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/nat210b" target="_blank" rel="noopener noreferrer"
                                class="flex items-start gap-3 group">
                                <div
                                    class="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-slate-600 flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5">
                                    <i
                                        class="fa-brands fa-github text-slate-400 group-hover:text-white text-sm transition-colors"></i>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-500 font-medium uppercase tracking-wide">GitHub</p>
                                    <p class="text-sm text-slate-300 group-hover:text-white transition-colors">
                                        github.com/nat210b</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <div class="flex items-start gap-3">
                                <div
                                    class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <i class="fa-solid fa-location-dot text-slate-400 text-xs"></i>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-500 font-medium uppercase tracking-wide">Location</p>
                                    <p class="text-sm text-slate-300">Thailand</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-xs text-slate-600">
                    © {{ new Date().getFullYear() }} Wannachol Pinprom. All rights reserved.
                </p>
                <p class="text-xs text-slate-600 flex items-center gap-1.5">
                    Built with
                    <i class="fa-brands fa-vuejs text-green-500"></i> Vue.js &
                    <i class="fa-solid fa-fire text-orange-400"></i> Firebase
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#profile', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experiences', label: 'Experience' },
    { href: '#certificate', label: 'Certificates' },
    { href: '#tech-skill', label: 'Skills' },
    { href: '#documents', label: 'Documents' },
]
</script>
