#!/bin/bash

files=(
src/components/home/HeroSection.tsx
src/components/home/FAQ.tsx
src/components/home/TargetUsers.tsx
src/components/blogs/Newsletter.tsx
src/components/Navbar.tsx
src/app/blogs/[slug]/page.tsx
src/components/home/Support.tsx
src/components/blogs/CategoryFilter.tsx
src/app/pricing/page.tsx
src/components/home/WhatIsNaatiNinja.tsx
src/app/contact/page.tsx
src/components/home/HowItWorks.tsx
src/components/home/Credibility.tsx

)

for file in "${files[@]}"; do
  sed -i "s/bg-gradient-to-r from-blue-600 to-indigo-600/bg-gradient-to-r from-[#0b8d8c] to-[#f7941e]/g" "$file"
done

echo "Button gradients updated successfully!"
