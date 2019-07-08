---
title: Home
layout: custom-page
publish_date: 2019-07-01T03:48:43.000+00:00
date: 2019-06-30T05:00:00.000+00:00
blocks:
- template: block-slices
  block: blocks/slices
  slices:
  - image: "/uploads/2019/07/austin-2.jpg"
    title: Under Construction
    url: []
    custom_url: ''
    text: I'm in the process of fiddlin. Brb.
  - image: "/uploads/2019/07/hero.jpg"
    title: About Me
    text: ''
    url: []
    custom_url: ''
  - image: "/uploads/2019/07/IMG_1970.jpeg"
    title: Book Me
    text: How can I help?
    url: []
    custom_url: ''
  custom_css: ''
- template: block-grid-group
  block: blocks/grid
  grid_vertical_align: Middle
  grid_horizontal_align: Center
  group_title: Main Group
  no_gutter: true
  default_max-width: false
  custom_max-width: ''
  custom_css: ''
- template: block-text
  block: blocks/text
  widths:
    large_width: 50% (1/2)
    large_horizontal_align: Left
    medium_width: 33% (1/3)
    medium_horizontal_align: Left
    small_width: 100%
    small_horizontal_align: Left
    hide_large: false
    hide_medium: false
    hide_small: false
  assign_to_group: Main Group
  title: Always on <span>Time</span>
  text: "<p><strong>For Practice, the Show, the Studio,<br>with the Bass Player</strong></p><h6>(and
    if required the Click)</h6>"
  button_text: ''
  button_url: ''
  custom_css: |-
    == {
    max-width:650px;
    margin:0 auto;
    }
    == h2 {
    font-family: Butler,serif;
    font-size: 4.25em;
    margin: 0 0 0.15em;
    }
    == h2 span {
    background: #ee5c6c;
    background: linear-gradient(145deg,#ee5c6c,#6a0d83);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    == .rte {
    font-size: 1.6em;
    }
    == p {
    margin: 0 0 0.25em;
    }
    == h6 {
    margin: 0.1em 0 0;
    font-size: 0.6em;
    font-weight: 100;
    }
- template: slider
  block: blocks/slider
  widths:
    large_width: 50% (1/2)
    medium_width: 66% (2/3)
    small_width: 100%
    hide_large: false
    hide_medium: false
    hide_small: false
  assign_to_group: Main Group
  image:
  - main_image: "/uploads/2019/07/hero.jpg"
    mobile_image: ''
    text: ''
    custom_button_url: ''
    custom_css: ''
    text_color: "#FFFFFF"
    overlay_color: "#000000"
    opacity: ''
    title: ''
    button_text: ''
    button_url: ''
  set_height: true
  height_desktop: 50vh
  height_mobile: ''
menu:
  navigation:
    identifier: _index
    weight: 1

---
