---
title: Custom Testing
date: 2019-06-26T05:00:00.000+00:00
publish_date: 2019-06-27T05:00:00.000+00:00
layout: custom-page
blocks:
- template: block-gradient-hero
  block: blocks/gradient-hero
  text_color: "#FFFFFF"
  left_color: "#EE5C6C"
  right_color: "#6A0D83"
  image: "/uploads/2018/02/17/bridge.jpg"
  title: about<br>pnkdrmmr
  show_page_info: false
  image_position: ''
  image_size: ''
  custom_css: ''
  widths:
    large_width: ''
    hide_large: false
    medium_width: ''
    hide_medium: false
    small_width: ''
    hide_small: false
- template: block-grid-group
  block: blocks/grid
  group_title: Main Group
  default_max-width: true
  custom_max-width: ''
  custom_css: ''
  no_gutter: true
- template: block-content
  block: blocks/content
  widths:
    large_width: 50% (1/2)
    medium_width: 100%
    small_width: 100%
    hide_large: false
    hide_medium: false
    hide_small: false
  assign_to_group: Main Group
  custom_css: ''
- template: slider
  block: blocks/slider
  widths:
    large_width: 50% (1/2)
    medium_width: 100%
    small_width: 100%
    hide_large: false
    hide_medium: false
    hide_small: false
  assign_to_group: Main Group
  image:
  - main_image: "/uploads/2018/02/17/city.jpg"
    mobile_image: ''
    title: Your Title Here!
    text: Et harum quidem rerum facilis est et expedita distinctio. Esse cillum dolore
      eu fugiat nulla pariatur.
    custom_button_url: ''
    custom_css: |-
      == .center-content {
      left: 5%;
      transform: translateY(-50%);
      width: 90%;
      max-width: 500px;
      }
    text_color: "#FFFFFF"
    overlay_color: "#6A0D83"
    opacity: '6'
    button_text: ''
    button_url: ''
  set_height: false
  height_desktop: ''
  height_mobile: ''
- template: block-gallery
  block: blocks/gallery
  widths:
    large_width: 100%
    medium_width: 100%
    small_width: 100%
    hide_large: false
    hide_medium: false
    hide_small: false
  assign_to_group: Main Group
  title: Where I've Been
  images:
  - image: "/uploads/2018/02/17/building3.jpg"
    caption: Wtf is this shit?
  - image: "/uploads/2018/02/17/building2.jpg"
    caption: All Over
  - image: "/uploads/2018/02/17/bridge.jpg"
    caption: ''
  custom_css: ''

---
What happens here.