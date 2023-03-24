import React, { useMemo } from "react";
import { ReactComponent as AddCategory } from "../images/icons/icon-add-category.svg";
import { ReactComponent as AddInvite } from "../images/icons/icon-add-invite.svg";
import { ReactComponent as AddProduct } from "../images/icons/icon-add-product.svg";
import { ReactComponent as Add } from "../images/icons/icon-add.svg";
import { ReactComponent as AlignCenterAlt } from "../images/icons/icon-align-center-alt.svg";
import { ReactComponent as AlignCenter } from "../images/icons/icon-align-center.svg";
import { ReactComponent as AlignLeftAlt } from "../images/icons/icon-align-left-alt.svg";
import { ReactComponent as AlignLeft } from "../images/icons/icon-align-left.svg";
import { ReactComponent as AlignRightAlt } from "../images/icons/icon-align-right-alt.svg";
import { ReactComponent as AlignRight } from "../images/icons/icon-align-right.svg";
import { ReactComponent as AnalyticsNav } from "../images/icons/icon-analytics-nav.svg";
import { ReactComponent as Applause } from "../images/icons/icon-applause.svg";
import { ReactComponent as ArrowCircle } from "../images/icons/icon-arrow-circle.svg";
import { ReactComponent as ArrowLeft } from "../images/icons/icon-arrow-left.svg";
import { ReactComponent as ArrowRightBottomFilled } from "../images/icons/icon-arrow-right-bottom-filled.svg";
import { ReactComponent as ArrowRightTopFilled } from "../images/icons/icon-arrow-right-top-filled.svg";
import { ReactComponent as ArrowRight } from "../images/icons/icon-arrow-right.svg";
import { ReactComponent as ArrowUpFull } from "../images/icons/icon-arrow-up.svg";
import { ReactComponent as Attachment } from "../images/icons/icon-attachment.svg";
import { ReactComponent as BarGraph } from "../images/icons/icon-bar-graph.svg";
import { ReactComponent as Bell } from "../images/icons/icon-bell.svg";
import { ReactComponent as Bold } from "../images/icons/icon-bold.svg";
import { ReactComponent as CalendarStarred } from "../images/icons/icon-calendar-starred.svg";
import { ReactComponent as Calendar } from "../images/icons/icon-calendar.svg";
import { ReactComponent as CameraOff } from "../images/icons/icon-camera-off.svg";
import { ReactComponent as CameraOn } from "../images/icons/icon-camera-on.svg";
import { ReactComponent as CameraOutline } from "../images/icons/icon-camera-outline.svg";
import { ReactComponent as ChatComment } from "../images/icons/icon-chat-comment.svg";
import { ReactComponent as TabChat } from "../images/icons/icon-chat-tab.svg";
import { ReactComponent as CheckCircle } from "../images/icons/icon-check-circle.svg";
import { ReactComponent as Check } from "../images/icons/icon-check.svg";
import { ReactComponent as CheckboxBorderless } from "../images/icons/icon-checkbox-borderless.svg";
import { ReactComponent as CheckboxChecked } from "../images/icons/icon-checkbox-checked.svg";
import { ReactComponent as Checkbox } from "../images/icons/icon-checkbox.svg";
import { ReactComponent as CheckboxCheckedPartial } from "../images/icons/icon-checked-partial.svg";
import { ReactComponent as Clock } from "../images/icons/icon-clock.svg";
import { ReactComponent as AddCloseCircle } from "../images/icons/icon-close-add-circle.svg";
import { ReactComponent as Close } from "../images/icons/icon-close.svg";
import { ReactComponent as ClubHouse } from "../images/icons/icon-club-house.svg";
import { ReactComponent as Code } from "../images/icons/icon-code.svg";
import { ReactComponent as CommentEmpty } from "../images/icons/icon-comment-empty.svg";
import { ReactComponent as Computer } from "../images/icons/icon-computer.svg";
import { ReactComponent as ContentNav } from "../images/icons/icon-content-nav.svg";
import { ReactComponent as Copy } from "../images/icons/icon-copy.svg";
import { ReactComponent as Delete } from "../images/icons/icon-delete.svg";
import { ReactComponent as DesktopSlim } from "../images/icons/icon-desktop-slim.svg";
import { ReactComponent as Dissolve } from "../images/icons/icon-dissolve.svg";
import { ReactComponent as Document } from "../images/icons/icon-document.svg";
import { ReactComponent as DocumentsReverse } from "../images/icons/icon-documents-reverse.svg";
import { ReactComponent as Documents } from "../images/icons/icon-documents.svg";
import { ReactComponent as Unlink } from "../images/icons/icon-don-not-link.svg";
import { ReactComponent as DoneFilled } from "../images/icons/icon-done-filled.svg";
import { ReactComponent as DownloadSpeed } from "../images/icons/icon-download-speed.svg";
import { ReactComponent as DragArrows } from "../images/icons/icon-drag-arrows.svg";
import { ReactComponent as DragHandle } from "../images/icons/icon-drag-handle.svg";
import { ReactComponent as Edit } from "../images/icons/icon-edit.svg";
import { ReactComponent as Email } from "../images/icons/icon-email.svg";
import { ReactComponent as EmojiSmile } from "../images/icons/icon-emoji-smile.svg";
import { ReactComponent as Emoji } from "../images/icons/icon-emoji.svg";
import { ReactComponent as EventsNav } from "../images/icons/icon-events-nav.svg";
import { ReactComponent as FaceBook } from "../images/icons/icon-facebook.svg";
import { ReactComponent as TabFeeds } from "../images/icons/icon-feeds-tab.svg";
import { ReactComponent as FilterActive } from "../images/icons/icon-filter-active.svg";
import { ReactComponent as FilterInactive } from "../images/icons/icon-filter-inactive.svg";
import { ReactComponent as Font } from "../images/icons/icon-font.svg";
import { ReactComponent as Fonts } from "../images/icons/icon-fonts.svg";
import { ReactComponent as Fullscreen } from "../images/icons/icon-fullscreen.svg";
import { ReactComponent as Gif } from "../images/icons/icon-gif.svg";
import { ReactComponent as ImageInverse } from "../images/icons/icon-image-inverse.svg";
import { ReactComponent as Image } from "../images/icons/icon-image.svg";
import { ReactComponent as Images } from "../images/icons/icon-images.svg";
import { ReactComponent as InfoCircle } from "../images/icons/icon-info-circle.svg";
import { ReactComponent as InfoOutlineStraight } from "../images/icons/icon-info-outline-straight.svg";
import {
  ReactComponent as InfoOutline,
  ReactComponent as PrimaryToolTipSvg,
} from "../images/icons/icon-info-outline.svg";
import { ReactComponent as Instagram } from "../images/icons/icon-instagram.svg";
import { ReactComponent as InternetSpeed } from "../images/icons/icon-internet-speed.svg";
import { ReactComponent as Invite } from "../images/icons/icon-invite.svg";
import { ReactComponent as Italic } from "../images/icons/icon-italic.svg";
import { ReactComponent as ArrowDown } from "../images/icons/icon-keyboard-arrow-down.svg";
import { ReactComponent as KeyboardArrowLeft } from "../images/icons/icon-keyboard-arrow-left.svg";
import { ReactComponent as KeyboardArrowRight } from "../images/icons/icon-keyboard-arrow-right.svg";
import { ReactComponent as ArrowUp } from "../images/icons/icon-keyboard-arrow-up.svg";
import { ReactComponent as LayoutGrid } from "../images/icons/icon-layout-grid.svg";
import { ReactComponent as LayoutHorizontal } from "../images/icons/icon-layout-horizontal.svg";
import { ReactComponent as LayoutList } from "../images/icons/icon-layout-list.svg";
import { ReactComponent as LayoutNoTabs } from "../images/icons/icon-layout-no-tabs.svg";
import { ReactComponent as LayoutVertical } from "../images/icons/icon-layout-vertical.svg";
import { ReactComponent as Like } from "../images/icons/icon-like.svg";
import { ReactComponent as Link } from "../images/icons/icon-link.svg";
import { ReactComponent as LinkedIn } from "../images/icons/icon-linkedin.svg";
import { ReactComponent as LittleArrowDown } from "../images/icons/icon-little-arrow-down.svg";
import { ReactComponent as LittleArrowUp } from "../images/icons/icon-little-arrow-up.svg";
import { ReactComponent as Live } from "../images/icons/icon-live.svg";
import { ReactComponent as LogOut } from "../images/icons/icon-log-out.svg";
import { ReactComponent as TabMedia } from "../images/icons/icon-media-tab.svg";
import { ReactComponent as Message } from "../images/icons/icon-message.svg";
import { ReactComponent as MicrophoneOff } from "../images/icons/icon-mic-off.svg";
import { ReactComponent as MicrophoneOn } from "../images/icons/icon-mic-on.svg";
import { ReactComponent as ModerationCrossedFilled } from "../images/icons/icon-moderation-crossed-filled.svg";
import { ReactComponent as ModerationFilled } from "../images/icons/icon-moderation-filled.svg";
import { ReactComponent as MoreHorizontal } from "../images/icons/icon-more-horiz.svg";
import { ReactComponent as Move } from "../images/icons/icon-move.svg";
import { ReactComponent as NewWindow } from "../images/icons/icon-new-window.svg";
import { ReactComponent as TabNotes } from "../images/icons/icon-notes-tab.svg";
import { ReactComponent as Off } from "../images/icons/icon-off.svg";
import { ReactComponent as OL } from "../images/icons/icon-ol.svg";
import { ReactComponent as OnDemand } from "../images/icons/icon-on-demand.svg";
import { ReactComponent as On } from "../images/icons/icon-on.svg";
import { ReactComponent as OpenBook } from "../images/icons/icon-open-book.svg";
import { ReactComponent as PaintBrush } from "../images/icons/icon-paintbrush.svg";
import { ReactComponent as Palettes } from "../images/icons/icon-palettes.svg";
import { ReactComponent as Paperclip } from "../images/icons/icon-paperclip.svg";
import { ReactComponent as Password } from "../images/icons/icon-password.svg";
import { ReactComponent as Pause } from "../images/icons/icon-pause.svg";
import { ReactComponent as PeopleNav } from "../images/icons/icon-people-nav.svg";
import { ReactComponent as People } from "../images/icons/icon-people.svg";
import { ReactComponent as Person } from "../images/icons/icon-person.svg";
import { ReactComponent as PhoneSlim } from "../images/icons/icon-phone-slim.svg";
import { ReactComponent as Phone } from "../images/icons/icon-phone.svg";
import { ReactComponent as Photo } from "../images/icons/icon-photo.svg";
import { ReactComponent as Play } from "../images/icons/icon-play.svg";
import { ReactComponent as Poll } from "../images/icons/icon-poll.svg";
import { ReactComponent as Product } from "../images/icons/icon-product.svg";
import { ReactComponent as ProductsNav } from "../images/icons/icon-products-nav.svg";
import { ReactComponent as QuestionFilled } from "../images/icons/icon-question-filled.svg";
import { ReactComponent as Question } from "../images/icons/icon-question.svg";
import { ReactComponent as QuestionsAndPosts } from "../images/icons/icon-questions-and-posts.svg";
import { ReactComponent as QuestionOutlined } from "../images/icons/icon-questions-outlined.svg";
import { ReactComponent as Quiz } from "../images/icons/icon-quiz.svg";
import { ReactComponent as RadioOn } from "../images/icons/icon-radio-on.svg";
import { ReactComponent as RedoAlt } from "../images/icons/icon-redo-alt.svg";
import { ReactComponent as Redo } from "../images/icons/icon-redo.svg";
import { ReactComponent as RefreshCircle } from "../images/icons/icon-refresh-circle.svg";
import { ReactComponent as RefreshTransparent } from "../images/icons/icon-refresh-transparent.svg";
import { ReactComponent as Refresh } from "../images/icons/icon-refresh.svg";
import { ReactComponent as ReplyFilled } from "../images/icons/icon-reply-filled.svg";
import { ReactComponent as Search } from "../images/icons/icon-search.svg";
import { ReactComponent as Send } from "../images/icons/icon-send.svg";
import { ReactComponent as SettingsSliders } from "../images/icons/icon-settings-sliders.svg";
import { ReactComponent as SettingsTransparent } from "../images/icons/icon-settings-transparent.svg";
import { ReactComponent as Settings } from "../images/icons/icon-settings.svg";
import { ReactComponent as ShareScreen } from "../images/icons/icon-share-screen.svg";
import { ReactComponent as Share } from "../images/icons/icon-share.svg";
import { ReactComponent as Shield } from "../images/icons/icon-shield.svg";
import { ReactComponent as Signal } from "../images/icons/icon-signal.svg";
import { ReactComponent as SmileyFace } from "../images/icons/icon-smiley-face.svg";
import { ReactComponent as Sound } from "../images/icons/icon-sound.svg";
import { ReactComponent as SquareCheckboxAll } from "../images/icons/icon-square-checkbox-all.svg";
import { ReactComponent as SquareCheckboxSelected } from "../images/icons/icon-square-checkbox-selected.svg";
import { ReactComponent as SquareCheckboxUnselected } from "../images/icons/icon-square-checkbox-unselected.svg";
import { ReactComponent as StopLive } from "../images/icons/icon-stop-live.svg";
import { ReactComponent as Support } from "../images/icons/icon-support.svg";
import { ReactComponent as TabletSlim } from "../images/icons/icon-tablet-slim.svg";
import { ReactComponent as ThemePalette } from "../images/icons/icon-theme-palette.svg";
import { ReactComponent as ThreeLinesTriangle } from "../images/icons/icon-three-lines-triangle.svg";
import { ReactComponent as TitlesOff } from "../images/icons/icon-titles-off.svg";
import { ReactComponent as TitlesOn } from "../images/icons/icon-titles-on.svg";
import { ReactComponent as TrashOutline } from "../images/icons/icon-trash-outline.svg";
import { ReactComponent as Trash } from "../images/icons/icon-trash.svg";
import { ReactComponent as Twitter } from "../images/icons/icon-twitter.svg";
import { ReactComponent as UL } from "../images/icons/icon-ul.svg";
import { ReactComponent as UndeleteFilled } from "../images/icons/icon-undelete-filled.svg";
import { ReactComponent as Underline } from "../images/icons/icon-underline.svg";
import { ReactComponent as UndoAlt } from "../images/icons/icon-undo-alt.svg";
import { ReactComponent as Undo } from "../images/icons/icon-undo.svg";
import { ReactComponent as Upload } from "../images/icons/icon-upload.svg";
import { ReactComponent as Url } from "../images/icons/icon-url.svg";
import { ReactComponent as Versions } from "../images/icons/icon-versions.svg";
import { ReactComponent as ViewersEyeOff } from "../images/icons/icon-view-off.svg";
import { ReactComponent as ViewersEye } from "../images/icons/icon-view.svg";
import { ReactComponent as VirtualBackground } from "../images/icons/icon-virtual-bg.svg";
import { ReactComponent as Wallpaper } from "../images/icons/icon-wallpaper.svg";
import { ReactComponent as Website } from "../images/icons/icon-web.svg";
import { ReactComponent as WhatsNew } from "../images/icons/icon-whats-new.svg";
import { ReactComponent as Window } from "../images/icons/icon-window.svg";
import { ReactComponent as YouTube } from "../images/icons/icon-youtube.svg";
import { ReactComponent as ZoomIn } from "../images/icons/icon-zoom-in.svg";
import { ReactComponent as ZoomOut } from "../images/icons/icon-zoom-out.svg";

export const ICONS = {
  ADD: "add",
  ADD_CLOSE_CIRCLE: "addCloseCircle",
  ARROW_UP_FULL: "arrowUpFull",
  ARROW_UP: "arrowUp",
  ARROW_DOWN: "arrowDown",
  ARROW_LEFT: "arrowLeft",
  ARROW_RIGHT: "arrowRight",
  ATTACHMENT: "attachment",
  KEYBOARD_ARROW_UP: "keyboardArrowUp",
  KEYBOARD_ARROW_DOWN: "keyboardArrowDown",
  CAMERA_ON: "camera",
  CAMERA_OFF: "cameraOff",
  CHECK: "check",
  CHECKBOX: "checkbox",
  CHECKBOX_CHECKED: "checkboxChecked",
  CHECKBOX_CHECKED_PARTIAL: "checkboxCheckedPartial",
  COPY: "copy",
  CLOSE: "close",
  DISSOLVE: "dissolve",
  DOWNLOAD_SPEED: "downloadSpeed",
  EDIT: "edit",
  EMOJI: "emoji",
  FULLSCREEN: "fullscreen",
  INFO_CIRCLE: "infoCircle",
  INFO_OUTLINE: "infoOutline", //if this string changes, change it in the API in the "GetBasePageModuleDbGrouping" func
  INFO_OUTLINE_STRAIGHT: "infoOutlineStraight",
  INTERNET_SPEED: "internetSpeed",
  KEYBOARD_ARROW_LEFT: "keyboardArrowLeft",
  KEYBOARD_ARROW_RIGHT: "keyboardArrowRight",
  MESSAGE: "message",
  MICROPHONE_ON: "microphoneOn",
  MICROPHONE_OFF: "microphoneOff",
  LINK: "link",
  LIVE: "live",
  LOG_OUT: "logOut",
  PEOPLE: "people",
  PHOTO: "photo",
  REFRESH: "refresh",
  REFRESH_CIRCLE: "refreshCircle",
  SEARCH: "search",
  SEND: "send",
  SETTINGS: "settings",
  SETTINGS_TRANSPARENT: "settingsTransparent",
  SHARE_SCREEN: "shareScreen",
  SOUND: "sound",
  THREE_DOTS_VERTICAL: "threeDotsVertical",
  THREE_DOTS_HORIZONTAL: "threeDotsHorizontal",
  THREE_LINES_TRIANGLE: "threeLinesTriangle",
  UNLINK: "unlink",
  VIEWERS_EYE: "viewersEye",
  VIEWERS_EYE_OFF: "viewersEyeOff",
  VIRTUAL_BACKGROUND: "virtualBackground",
  BOLD: "bold",
  ITALIC: "italic",
  UNDERLINE: "underline",
  UNDO: "undo",
  REDO: "redo",
  OL: "ol",
  UL: "ul",
  ALIGN_RIGHT: "align-right",
  ALIGN_CENTER: "align-center",
  ALIGN_LEFT: "align-left",
  TRASH: "trash",
  FONT: "font",
  SHARE: "share",
  QUESTION: "question",
  QUESTION_OUTLINED: "question-outlined",
  QUESTIONS_AND_POSTS: "questions-and-posts",
  TITLES_ON: "titlesOn",
  TITLES_OFF: "titlesOff",
  INVITE: "invite",
  ADD_INVITE: "addInvite",
  TAB_CHAT: "tabChat",
  TAB_FEEDS: "tabFeeds",
  TAB_MEDIA: "tabMedia",
  TAB_NOTES: "tabNotes",
  CHECK_CIRCLE: "checkCircle",
  REFRESH_TRANSPARENT: "refreshTransparent",
  SETTINGS_SLIDERS: "settingsSliders",
  COMPUTER: "computer",
  PHONE: "phone",
  EMAIL: "email",
  RADIO_ON: "radioOn",
  PLAY: "play",
  PAUSE: "pause",
  CLOCK: "clock",
  STOP_LIVE: "stop-live",
  WINDOW: "window",
  WALLPAPER: "wallpaper",
  DOCUMENT: "document",
  DOCUMENTS: "documents",
  MOVE: "move",
  UPLOAD: "upload",
  ZOOM_IN: "zoomIn",
  ZOOM_OUT: "zoomOut",
  CAMERA_OUTLINE: "cameraOutline",
  LITTLE_ARROW_UP: "littleArrowUp",
  LITTLE_ARROW_DOWN: "littleArrowDown",
  LAYOUT_GRID: "layoutGrid",
  LAYOUT_LIST: "layoutList",
  IMAGE: "image",
  IMAGE_INVERSE: "imageInverse",
  FONTS: "fonts",
  PALETTES: "palettes",
  SQUARE_CHECKBOX_ALL: "squareCheckboxAll",
  SQUARE_CHECKBOX_SELECTED: "squareCheckboxSelected",
  SQUARE_CHECKBOX_UNSELECTED: "squareCheckboxUnselected",
  ADD_PRODUCT: "addProduct",
  NEW_WINDOW: "newWindow",
  ADD_CATEGORY: "addCategory",
  PHONE_SLIM: "phoneSlim",
  TABLET_SLIM: "tabletSlim",
  DESKTOP_SLIM: "desktopSlim",
  DRAG_HANDLE: "dragHandle",
  REPLY_FILLED: "ReplyFilled",
  UNDELETE_FILLED: "UndeleteFilled",
  DONE_FILLED: "DoneFilled",
  ARROW_RIGHT_TOP_FILLED: "ArrowRightTopFilled",
  ARROW_RIGHT_BOTTOM_FILLED: "ArrowRightBottomFilled",
  MODERATION_FILLED: "ModerationFilled",
  MODERATION_CROSSED_FILLED: "ModerationCrossedFilled",
  SHIELD: "Shield",
  CHAT_COMMENT: "ChatComment",
  QUESTION_FILLED: "QuestionFilled",
  PRIMARY_TOOLTIP: "PrimaryTooltip",
  CALENDAR: "Calendar",
  CALENDAR_STARRED: "calendarStarred",
  SMILEY_FACE: "smiley-face",
  APPLAUSE: "applause",
  TWITTER: "Twitter",
  LINKEDIN: "LinkedIn",
  WEBSITE: "Website",
  YOUTUBE: "YouTube",
  FACEBOOK: "FaceBook",
  INSTAGRAM: "Instagram",
  PRODUCT: "product",
  QUIZ: "quiz",
  POLL: "poll",
  EVENTS_NAV: "EventsNav",
  ANALYTICS_NAV: "AnalyticsNav",
  PEOPLE_NAV: "PeopleNav",
  CONTENT_NAV: "ContentNav",
  PRODUCTS_NAV: "ProductsNav",
  WHATS_NEW: "WhatsNew",
  SUPPORT: "Support",
  BELL: "Bell",
  THEME_PALETTE: "ThemePalette",
  VERSIONS: "Versions",
  TRASH_OUTLINE: "trashOutline",
  PAINTBRUSH: "Paintbrush",
  ARROW_CIRCLE: "ArrowCircle",
  DELETE: "Delete",
  ON: "On",
  OFF: "Off",
  CLUB_HOUSE: "clubHouse",
  OPEN_BOOK: "openBook",
  PERSON: "person",
  FILTER_ACTIVE: "filterActive",
  FILTER_INACTIVE: "filterInactive",
  DRAG_ARROWS: "DragArrows",
  PASSWORD: "password",
  ALIGN_CENTER_ALT: "align-center-alt",
  ALIGN_LEFT_ALT: "align-left-alt",
  ALIGN_RIGHT_ALT: "align-right-alt",
  UNDO_ALT: "undo-alt",
  REDO_ALT: "redo-alt",
  ON_DEMAND: "on-demand",
  PAPERCLIP: "paperclip",
  CODE: "code",
  BAR_GRAPH: "bar-graph", //if this string changes, change it in the API in the "GetBasePageModuleDbGrouping" function
  LAYOUT_NO_TABS: "layoutNoTabs",
  LAYOUT_HORIZONTAL: "layoutHorizontal",
  LAYOUT_VERTICAL: "layoutVertical",
  CHECKBOX_BORDERLESS: "checkboxBorderless",
  SIGNAL: "signal", //if this string changes, change it in the API in the "GetBasePageModuleDbGrouping" function
  IMAGES: "images", //if this string changes, change it in the API in the "GetBasePageModuleDbGrouping" function
  DOCUMENTS_REVERSE: "documentsReverse",
  URL: "Url",
  GIF: "gif",
  EMOJI_SMILE: "emoji-smile",
  LIKE: "like",
  COMMENT_EMPTY: "comment-empty",
};

export type IconType = keyof typeof ICONS;
// The actual coloring of the icon svg happens in _icons.scss. By default all of the icons they gave us are defaultGray.
// If we use other colors of the icons I apply those in _icons.scss.
export const COLORS = {
  DEFAULT_GRAY: "default-gray",
  GRAY: "gray",
  GREEN: "green",
  WHITE: "white",
  BLACK: "black",
  LIGHT_BLACK: "light-black",
  GRAY_PRESENTER: "gray-presenter", // light gray labels + icons for inputs on presenter app entry flow (teal background)
  MED_LIGHT_GRAY: "med-light-gray",
  CYAN: "cyan",
  ACCENT_BLUE: "#3456FF",
  DARK_GREY: "dark-gray",
  ALT_GRAY: "#908CA0",
  DEFAULT: "default",
};

interface Props {
  name: string;
  size: number; // replaces width + height in the svg. If you use actual width/height from figma the icon is too small. Take the larger
  // of width + height and use that as the size param
  color: string;
  viewBox?: string;
  backgroundColor?: string;
}

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export function Icon(props: Props): JSX.Element {
  const {
    name,
    size,
    color,
    viewBox = "0 0 20 20",
    backgroundColor = "transparent",
  } = props;

  return useMemo(() => {
    switch (name) {
      case ICONS.ADD:
        return (
          <Add
            id="icon-add"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ADD_CLOSE_CIRCLE:
        return (
          <AddCloseCircle
            id="icon-close-add-circle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ARROW_UP_FULL:
        return (
          <ArrowUpFull
            id="icon-arrow-left"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ARROW_UP:
        // rotated 90 degress in sass
        return (
          <ArrowLeft
            id="icon-arrow-up"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ARROW_DOWN:
        // rotated 270 degress in sass
        return (
          <ArrowLeft
            id="icon-arrow-down"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ARROW_LEFT:
        return (
          <ArrowLeft
            id="icon-arrow-left"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ARROW_RIGHT:
        return (
          <ArrowRight
            id="icon-arrow-right"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.KEYBOARD_ARROW_UP:
        return (
          <ArrowUp
            id="icon-keyboard-arrow-up"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.KEYBOARD_ARROW_DOWN:
        return (
          <ArrowDown
            id="icon-keyboard-arrow-down"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ATTACHMENT:
        return (
          <Attachment
            id="icon-attachment"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CAMERA_ON:
        return (
          <CameraOn
            id="icon-camera-on"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CHECK:
        return (
          <Check
            id="icon-check"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CHECKBOX:
        return (
          <Checkbox
            id="icon-checkbox"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CHECKBOX_CHECKED:
        return (
          <CheckboxChecked
            id="icon-checkbox-checked"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CHECKBOX_CHECKED_PARTIAL:
        return (
          <CheckboxCheckedPartial
            id="icon-checkbox-checked-partial"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CAMERA_OFF:
        return (
          <CameraOff
            id="icon-camera-off"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CLOSE:
        return (
          <Close
            id="icon-close"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.COPY:
        return (
          <Copy
            id="icon-copy"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.DISSOLVE:
        return (
          <Dissolve
            id="icon-dissolve"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.DOWNLOAD_SPEED:
        return (
          <DownloadSpeed
            id="icon-download-speed"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.EDIT:
        return (
          <Edit
            id="icon-edit"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.EMOJI:
        return (
          <Emoji
            id="icon-emoji"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.FULLSCREEN:
        return (
          <Fullscreen
            id="icon-fullscreen"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.INFO_CIRCLE:
        return (
          <InfoCircle
            id="icon-info-circle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.INFO_OUTLINE:
        return (
          <InfoOutline
            id="icon-info-outline"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.INFO_OUTLINE_STRAIGHT:
        return (
          <InfoOutlineStraight
            id="icon-info-outline-straight"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.INTERNET_SPEED:
        return (
          <InternetSpeed
            id="icon-internet-speed"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.KEYBOARD_ARROW_LEFT:
        return (
          <KeyboardArrowLeft
            id="icon-keyboard-arrow-left"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.KEYBOARD_ARROW_RIGHT:
        return (
          <KeyboardArrowRight
            id="icon-keyboard-arrow-right"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LINK:
        return (
          <Link
            id="icon-link"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LIVE:
        return (
          <Live
            id="icon-live"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LOG_OUT:
        return (
          <LogOut
            id="icon-log-out"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.MESSAGE:
        return (
          <Message
            id="icon-message"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.MICROPHONE_ON:
        return (
          <MicrophoneOn
            id="icon-mic-on"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.MICROPHONE_OFF:
        return (
          <MicrophoneOff
            id="icon-mic-off"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.PEOPLE:
        return (
          <People
            id="icon-people"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.PHOTO:
        return (
          <Photo
            id="icon-photo"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.REFRESH:
        return (
          <Refresh
            id="icon-refresh"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.REFRESH_CIRCLE:
        return (
          <RefreshCircle
            id="icon-refresh-circle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SEARCH:
        return (
          <Search
            id="icon-search"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SEND:
        return (
          <Send
            id="icon-send"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SETTINGS:
        return (
          <Settings
            id="icon-settings"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SETTINGS_TRANSPARENT:
        return (
          <SettingsTransparent
            id="icon-settings-transparent"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.SOUND:
        return (
          <Sound
            id="icon-sound"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SHARE_SCREEN:
        return (
          <ShareScreen
            id="icon-share-screen"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.THREE_DOTS_VERTICAL:
        return (
          <MoreHorizontal
            id="icon-three-dots-vertical"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.THREE_DOTS_HORIZONTAL:
        return (
          <MoreHorizontal
            id="icon-three-dots-horizontal"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor, transform: `rotate(90deg)` }}
          />
        );
      case ICONS.THREE_LINES_TRIANGLE:
        return (
          <ThreeLinesTriangle
            id="icon-three-lines-triangle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.UNLINK:
        return (
          <Unlink
            id="icon-unlink"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.VIEWERS_EYE:
        return (
          <ViewersEye
            id="icon-view"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.VIEWERS_EYE_OFF:
        return (
          <ViewersEyeOff
            id="icon-view"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.VIRTUAL_BACKGROUND:
        return (
          <VirtualBackground
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.BOLD:
        return (
          <Bold
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.UNDERLINE:
        return (
          <Underline
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ITALIC:
        return (
          <Italic
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ALIGN_RIGHT:
        return (
          <AlignRight
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ALIGN_LEFT:
        return (
          <AlignLeft
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ALIGN_CENTER:
        return (
          <AlignCenter
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.UNDO:
        return (
          <Undo
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.REDO:
        return (
          <Redo
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.OL:
        return (
          <OL
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.UL:
        return (
          <UL
            id="icon-virtual-background"
            className={color}
            height={size}
            width={size}
            viewBox={viewBox}
            style={{ backgroundColor }}
          />
        );
      case ICONS.TRASH:
        return (
          <Trash
            id="icon-trash"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.FONT:
        return (
          <Font
            id="icon-font"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SHARE:
        return (
          <Share
            id="icon-share"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.QUESTION:
        return (
          <Question
            id="icon-question"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.QUESTION_OUTLINED:
        return (
          <QuestionOutlined
            id="icon-question-outlined"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.QUESTIONS_AND_POSTS:
        return (
          <QuestionsAndPosts
            id="icon-questions-and-posts"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.TITLES_ON:
        return (
          <TitlesOn
            id="icon-titles"
            className={color}
            height={size}
            width={size}
            style={
              isSafari
                ? { position: "relative", bottom: 3, backgroundColor }
                : { backgroundColor }
            }
          />
        );
      case ICONS.TITLES_OFF:
        return (
          <TitlesOff
            id="icon-titles"
            className={color}
            height={size}
            width={size}
            style={
              isSafari
                ? { position: "relative", bottom: 3, backgroundColor }
                : { backgroundColor }
            }
          />
        );
      case ICONS.INVITE:
        return (
          <Invite
            id="icon-invite"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ADD_INVITE:
        return (
          <AddInvite
            id="icon-invite"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.TAB_CHAT:
        return (
          <TabChat
            id="icon-chat-tab"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.TAB_FEEDS:
        return (
          <TabFeeds
            id="icon-feeds-tab"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.TAB_MEDIA:
        return (
          <TabMedia
            id="icon-media-tab"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.TAB_NOTES:
        return (
          <TabNotes
            id="icon-notes-tab"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CHECK_CIRCLE:
        return (
          <CheckCircle
            id="icon-check-circle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.REFRESH_TRANSPARENT:
        return (
          <RefreshTransparent
            id="icon-refresh-transparent"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SETTINGS_SLIDERS:
        return (
          <SettingsSliders
            id="icon-settings-sliders"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.COMPUTER:
        return (
          <Computer
            id="icon-computer"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.PHONE:
        return (
          <Phone
            id="icon-phone"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.EMAIL:
        return (
          <Email
            id="icon-email"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.RADIO_ON:
        return (
          <RadioOn
            id="icon-radio-on"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.PLAY:
        return (
          <Play
            id="icon-play"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.PAUSE:
        return (
          <Pause
            id="icon-pause"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CLOCK:
        return (
          <Clock
            id="icon-clock"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.STOP_LIVE:
        return (
          <StopLive
            id="icon-stop-live"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.WINDOW:
        return (
          <Window
            id="icon-window"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.WALLPAPER:
        return (
          <Wallpaper
            id="icon-wallpaper"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.DOCUMENT:
        return (
          <Document
            id="icon-document"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.DOCUMENTS:
        return (
          <Documents
            id="icon-documents"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.MOVE:
        return (
          <Move
            id="icon-move"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.UPLOAD:
        return (
          <Upload
            id="icon-upload"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ZOOM_IN:
        return (
          <ZoomIn
            id="icon-zoom-in"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ZOOM_OUT:
        return (
          <ZoomOut
            id="icon-zoom-out"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.CAMERA_OUTLINE:
        return (
          <CameraOutline
            id="icon-camera-outline"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LITTLE_ARROW_UP:
        return (
          <LittleArrowUp
            id="icon-little-arrow-up"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LITTLE_ARROW_DOWN:
        return (
          <LittleArrowDown
            id="icon-little-arrow-down"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LAYOUT_GRID:
        return (
          <LayoutGrid
            id="icon-layout-grid"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.LAYOUT_LIST:
        return (
          <LayoutList
            id="icon-layout-list"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.IMAGE_INVERSE:
        return (
          <ImageInverse
            id="icon-image-inverse"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.IMAGE:
        return (
          <Image
            id="icon-image"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.FONTS:
        return (
          <Fonts
            id="icon-fonts"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.PALETTES:
        return (
          <Palettes
            id="icon-palettes"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SQUARE_CHECKBOX_ALL:
        return (
          <SquareCheckboxAll
            id="square-checkbox-all"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SQUARE_CHECKBOX_SELECTED:
        return (
          <SquareCheckboxSelected
            id="square-checkbox-selected"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SQUARE_CHECKBOX_UNSELECTED:
        return (
          <SquareCheckboxUnselected
            id="square-checkbox-unselected"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ADD_PRODUCT:
        return (
          <AddProduct
            id="icon-add-product"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.NEW_WINDOW:
        return (
          <NewWindow
            id="icon-new-window"
            className={color}
            height={size}
            width={size}
          />
        );
        return (
          <AddProduct
            id="icon-add-product"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.DRAG_HANDLE:
        return (
          <DragHandle
            id="icon-drag-handle"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.ADD_CATEGORY:
        return (
          <AddCategory
            id="icon-add-category"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PHONE_SLIM:
        return (
          <PhoneSlim
            id="icon-phone-slim"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.TABLET_SLIM:
        return (
          <TabletSlim
            id="icon-tablet-slim"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.DESKTOP_SLIM:
        return (
          <DesktopSlim
            id="icon-desktop-slim"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PRIMARY_TOOLTIP:
        return (
          <PrimaryToolTipSvg
            id="primary-tooltip"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.CALENDAR:
        return (
          <Calendar
            id="icon-calendar"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.APPLAUSE:
        return (
          <Applause
            id="icon-applause"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.SMILEY_FACE:
        return (
          <SmileyFace
            id="icon-smiley-face"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.REPLY_FILLED:
        return (
          <ReplyFilled
            id="icon-reply-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.UNDELETE_FILLED:
        return (
          <UndeleteFilled
            id="icon-undelete-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.DONE_FILLED:
        return (
          <DoneFilled
            id="icon-done-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ARROW_RIGHT_TOP_FILLED:
        return (
          <ArrowRightTopFilled
            id="icon-arrow-right-top-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ARROW_RIGHT_BOTTOM_FILLED:
        return (
          <ArrowRightBottomFilled
            id="icon-arrow-right-bottom-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.MODERATION_FILLED:
        return (
          <ModerationFilled
            id="icon-moderation-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.MODERATION_CROSSED_FILLED:
        return (
          <ModerationCrossedFilled
            id="icon-moderation-crossed-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.SHIELD:
        return (
          <Shield
            id="icon-shield"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.CHAT_COMMENT:
        return (
          <ChatComment
            id="icon-chat-comment"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.QUESTION_FILLED:
        return (
          <QuestionFilled
            id="icon-question-filled"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.TWITTER:
        return (
          <Twitter
            id="icon-twitter"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.LINKEDIN:
        return (
          <LinkedIn
            id="icon-linkedin"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.YOUTUBE:
        return (
          <YouTube
            id="icon-youtube"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.WEBSITE:
        return (
          <Website
            id="icon-website"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.FACEBOOK:
        return (
          <FaceBook
            id="icon-facebook"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.INSTAGRAM: //just using websiite svg until we get Instagram Icon
        return (
          <Instagram
            id="icon-instagram"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PRODUCT:
        return (
          <Product
            id="icon-product"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.QUIZ:
        return (
          <Quiz id="icon-quiz" className={color} height={size} width={size} />
        );
      case ICONS.POLL:
        return (
          <Poll id="icon-poll" className={color} height={size} width={size} />
        );
      case ICONS.EVENTS_NAV:
        return (
          <EventsNav
            id="icon-events-nav"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ANALYTICS_NAV:
        return (
          <AnalyticsNav
            id="icon-analyitcs-nav"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PEOPLE_NAV:
        return (
          <PeopleNav
            id="icon-people-nav"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.CONTENT_NAV:
        return (
          <ContentNav
            id="icon-content-nav"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PRODUCTS_NAV:
        return (
          <ProductsNav
            id="icon-products-nav"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.WHATS_NEW:
        return (
          <WhatsNew
            id="icon-whats-new"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.SUPPORT:
        return (
          <Support
            id="icon-support"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.BELL:
        return (
          <Bell id="icon-bell" className={color} height={size} width={size} />
        );
      case ICONS.THEME_PALETTE:
        return (
          <ThemePalette
            id="icon-theme-palette"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.VERSIONS:
        return (
          <Versions
            id="icon-versions"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.TRASH_OUTLINE:
        return (
          <TrashOutline
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PAINTBRUSH:
        return (
          <PaintBrush
            id="icon-paintbrush"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ARROW_CIRCLE:
        return (
          <ArrowCircle
            id="icon-arrow-circle"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.DELETE:
        return (
          <Delete
            id="icon-delete"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ON:
        return <On id="icon-on" className={color} height={size} width={size} />;
      case ICONS.OFF:
        return (
          <Off id="icon-off" className={color} height={size} width={size} />
        );
      case ICONS.CLUB_HOUSE:
        return (
          <ClubHouse
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.OPEN_BOOK:
        return (
          <OpenBook
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.CALENDAR_STARRED:
        return (
          <CalendarStarred
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PERSON:
        return (
          <Person
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.FILTER_ACTIVE:
        return (
          <FilterActive
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.FILTER_INACTIVE:
        return (
          <FilterInactive
            id="icon-trash-outline"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.DRAG_ARROWS:
        return (
          <DragArrows
            id="icon-drag-arrows"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PASSWORD:
        return (
          <Password
            id="icon-password"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ALIGN_CENTER_ALT:
        return (
          <AlignCenterAlt
            id="icon-align-center-alt"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ALIGN_LEFT_ALT:
        return (
          <AlignLeftAlt
            id="icon-align-left-alt"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ALIGN_RIGHT_ALT:
        return (
          <AlignRightAlt
            id="icon-align-right-alt"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.REDO_ALT:
        return (
          <RedoAlt
            id="icon-redo-alt"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.UNDO_ALT:
        return (
          <UndoAlt
            id="icon-undo-alt"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.ON_DEMAND:
        return (
          <OnDemand
            id="icon-on-demand"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.PAPERCLIP:
        return (
          <Paperclip
            id="icon-paperclip"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.CODE:
        return (
          <Code id="icon-code" className={color} height={size} width={size} />
        );
      case ICONS.BAR_GRAPH:
        return (
          <BarGraph
            id="icon-bar-graph"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.LAYOUT_NO_TABS:
        return (
          <LayoutNoTabs
            id="icon-layout-no-tabs"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.LAYOUT_HORIZONTAL:
        return (
          <LayoutHorizontal
            id="icon-layout-horizontal"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.LAYOUT_VERTICAL:
        return (
          <LayoutVertical
            id="icon-layout-vertical"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.CHECKBOX_BORDERLESS:
        return (
          <CheckboxBorderless
            id="icon-checkbox-borderless"
            className={color}
            height={size}
            width={size}
            style={{ backgroundColor }}
          />
        );
      case ICONS.SIGNAL:
        return (
          <Signal
            id="icon-signal"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.IMAGES:
        return (
          <Images
            id="icon-images"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.DOCUMENTS_REVERSE:
        return (
          <DocumentsReverse
            id="icon-documents-reverse"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.URL:
        return (
          <Url id="icon-url" className={color} height={size} width={size} />
        );
      case ICONS.GIF:
        return (
          <Gif id="icon-gif" className={color} height={size} width={size} />
        );
      case ICONS.EMOJI_SMILE:
        return (
          <EmojiSmile
            id="icon-emoji-smile"
            className={color}
            height={size}
            width={size}
          />
        );
      case ICONS.LIKE:
        return (
          <Like id="icon-like" className={color} height={size} width={size} />
        );
      case ICONS.COMMENT_EMPTY:
        return (
          <CommentEmpty
            id="icon-comment-empty"
            className={color}
            height={size}
            width={size}
          />
        );
      default:
        return <></>;
    }
  }, [name, size, color, viewBox, backgroundColor]);
}
