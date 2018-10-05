# Galactic Age Calculator

#### By _**Kendra Kelly**_

## Description

This project is to build a program that allows for the calculation of someones age on other planets as well as their life left to live due to life expectancy and/or if they are over that expectancy.

* Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
* Returns their age in Venus years. (A Venus year is .62 Earth years.)
* Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
* Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

## Setup/Installation Requirements
Using Command Line:
1. ``git clone https://github.com/coffeeringsdesign/Super-Galactic-Age-Calculator.git `` to clone the site.
2. ``cd ~`` to navigate to base directory
3. ``cd Desktop `` to navigate to your desktop
4. ``cd Super-Galactic-Age-Calculator`` to enter the site folder
5. ``npm init -y`` to initialize node
6. ``npm install`` to install all webpack dependencies
7. ``npm run start`` this will webpack and immediate pop open the site on your brower. I recommend Chrome.
8. Use Atom to edit any html, javascript, or sass.
9. If setup like above all changes made and saved successfully will appear automatically into your browser window.

## Specs

1. When a visitor enters their date of birth into a form, they get their age in Mercury years is returned:
* _Example Input: July 27, 1982_
* _Example Output: 149_

2. When a visitor enters their date of birth into a form, they get their age in Venus years is returned:
* _Example Input: July 27, 1982_
* _Example Output: 58.4_

3. When a visitor enters their date of birth into a form, they get their age in Mars years is returned:
* _Example Input: July 27, 1982_
* _Example Output: 19.125_

4. When a visitor enters their date of birth into a form, they get their age in Jupiter years is returned:
* _Example Input: July 27, 1982_
* _Example Output: 3.035_

5. When a visitor enters their date of birth and life expectancy into a form, they get their life expectancy in Mercury years returned:
* _Example Input: July 27, 1982, 108_
* _Example Output: 298_

6. When a visitor enters their date of birth and life expectancy into a form, they get their life expectancy in Venus years returned:
* _Example Input: July 27, 1982, 108_
* _Example Output: 116.8_

7. When a visitor enters their date of birth and life expectancy into a form, they get their life expectancy in Mars years returned:
* _Example Input: July 27, 1982, 108_
* _Example Output: 38.25_

8. When a visitor enters their date of birth and life expectancy into a form, they get their life expectancy in Jupiter years returned:
* _Example Input: July 27, 1982, 108_
* _Example Output: 6.07_

9. When a visitor enters their date of birth and life expectancy into a form, if their Mercury life expectancy is exceeded they get the years they have lived past it returned:
* _Example Input: July 27, 1919, 60_
* _Example Output: 159.5_

10. When a visitor enters their date of birth and life expectancy into a form, if their Mercury life expectancy is exceeded they get the years they have lived past it returned:
* _Example Input: July 27, 1919, 60_
* _Example Output: 89_

11. When a visitor enters their date of birth and life expectancy into a form, if their Mercury life expectancy is exceeded they get the years they have lived past it returned:
* _Example Input: July 27, 1919, 60_
* _Example Output: 20_

12. When a visitor enters their date of birth and life expectancy into a form, if their Mercury life expectancy is exceeded they get the years they have lived past it returned:
* _Example Input: July 27, 1919, 60_
* _Example Output: 5_

## Support and contact details

Please feel free to get in touch. Reach out to me at kendra@coffeeringsdesign.com.

## Technologies Used

Node, Webpack, Karma, Jasmine, JQuery, Babel, EsLint, & Atom.

### License

*MIT*

Copyright (c) 2018 **Kendra Kelly**
