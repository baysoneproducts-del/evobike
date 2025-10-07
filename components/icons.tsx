import React from 'react';

const iconProps = {
  className: "w-6 h-6",
};

export const DashboardIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M3 6h18M3 18h18"></path>
  </svg>
);

export const MessagesIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>
);

export const TicketsIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V7a2 2 0 00-2-2H5zM5 14a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H5z"></path>
  </svg>
);

export const TasksIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
  </svg>
);

export const SettingsIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

export const LogoutIcon: React.FC = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
  </svg>
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
);

export const ArrowUpIcon: React.FC = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
);

export const ArrowDownIcon: React.FC = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
);

export const SendIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
  </svg>
);

export const SearchIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

export const MoreVertIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
  </svg>
);

export const AttachmentIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" transform="rotate(45)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
);

export const MicrophoneIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8h-1a6 6 0 11-5.445-4.791l1.061-1.061A8 8 0 1011 14.93zM10 18a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
  </svg>
);

export const DoubleCheckIcon: React.FC<{className?: string, color?: string}> = ({ className, color = 'currentColor' }) => (
  <svg className={className || 'w-4 h-4'} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 7.5L10 16l-4-4L4.5 13l5.5 5.5L20 9l-1.5-1.5z"/>
    <path d="M13.5 7.5L5 16l-4-4L-.5 13l5.5 5.5L15 9l-1.5-1.5z" opacity="0.6"/>
  </svg>
);

export const PlusIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
);

export const WhatsAppIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-8 h-8"} fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.52 1.32 5.05L2 22l5.25-1.42c1.48.79 3.16 1.21 4.89 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.92-9.91zM17.53 15.3c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.62.14-.19.27-.7.87-.86 1.04-.16.17-.32.19-.59.05-.27-.14-1.14-.42-2.17-1.33-.81-.71-1.35-1.59-1.51-1.86s-.03-.43.11-.57c.13-.13.27-.32.41-.48.14-.16.19-.27.29-.46s.05-.36-.02-.5-.62-1.48-.84-2.02c-.23-.54-.46-.47-.62-.47h-.52c-.16 0-.43.05-.66.31-.23.27-.86.85-.86 2.07s.88 2.4 1 2.56c.12.17 1.71 2.6 4.14 3.63.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28l-.28-.12z"/>
    </svg>
);

export const MessengerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-8 h-8"} fill="#00B2FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.62 6.22 4.13 8.12L6 22l3.03-1.51C10.02 20.83 11 21 12 21c5.52 0 10-4.48 10-9s-4.48-9-10-9zm-1.5 10.5L6 10l6-4 4.5 2.5L20 6l-6 4-4.5-2.5L6 10z"/>
    </svg>
);

export const InstagramIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-8 h-8"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="ig-grad" cx="0.3" cy="1.2" r="1.2">
                <stop offset="0" stopColor="#F58529"/>
                <stop offset="0.4" stopColor="#DD2A7B"/>
                <stop offset="0.9" stopColor="#8134AF"/>
            </radialGradient>
        </defs>
        <path fill="url(#ig-grad)" d="M12 2c-2.72 0-3.05.01-4.12.06-1.06.05-1.79.22-2.42.47-.65.25-1.18.59-1.73 1.14-.55.55-.89 1.08-1.14 1.73-.25.63-.42 1.36-.47 2.42C2.01 8.95 2 9.28 2 12s.01 3.05.06 4.12c.05 1.06.22 1.79.47 2.42.25.65.59 1.18 1.14 1.73.55.55 1.08.89 1.73 1.14.63.25 1.36.42 2.42.47 1.07.05 1.4.06 4.12.06s3.05-.01 4.12-.06c1.06-.05 1.79-.22 2.42-.47.65-.25 1.18-.59 1.73-1.14.55-.55.89-1.08 1.14-1.73.25-.63.42-1.36.47-2.42.05-1.07.06-1.4.06-4.12s-.01-3.05-.06-4.12c-.05-1.06-.22-1.79-.47-2.42-.25-.65-.59-1.18-1.14-1.73-.55-.55-1.08-.89-1.73-1.14-.63-.25-1.36-.42-2.42-.47C15.05 2.01 14.72 2 12 2zm0 1.8c2.65 0 2.95.01 4 .06 1.02.05 1.58.21 1.94.36.46.18.78.39 1.14.75.36.36.57.68.75 1.14.15.36.31.92.36 1.94.05 1.05.06 1.35.06 4s-.01 2.95-.06 4c-.05 1.02-.21 1.58-.36 1.94-.18.46-.39.78-.75 1.14-.36.36-.68.57-1.14.75-.36.15-.92.31-1.94.36-1.05.05-1.35.06-4 .06-2.65 0-2.95-.01-4-.06-1.02-.05-1.58-.21-1.94-.36-.46-.18-.78-.39-1.14-.75-.36-.36-.57-.68-.75-1.14-.15-.36-.31-.92-.36-1.94-.05-1.05-.06-1.35-.06-4s.01-2.95.06-4c.05-1.02.21-1.58.36-1.94.18-.46.39.78.75-1.14.36-.36.68.57 1.14.75.36-.15.92.31 1.94.36 1.05-.05 1.35-.06 4-.06zM12 7.27c-2.61 0-4.73 2.12-4.73 4.73s2.12 4.73 4.73 4.73 4.73-2.12 4.73-4.73-2.12-4.73-4.73-4.73zm0 7.66c-1.62 0-2.93-1.31-2.93-2.93s1.31-2.93 2.93-2.93 2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93zm4.95-8.3c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1z"/>
    </svg>
);

// New icons for WhatsApp redesign
export const StatusIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"></path>
    </svg>
);
export const NewChatIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4m10 4h-5m5 0v-5m0 5l-7-7"></path>
    </svg>
);
export const FilterIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 00.586 1.414l4.828 4.828a1 1 0 001.414 0l4.828-4.828A2 2 0 0017 11.268V4a1 1 0 10-2 0v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 10-2 0v7a1 1 0 01-1 1H9a1 1 0 01-1-1V4z" />
    </svg>
);
export const MuteIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l-4-4m0 4l4-4" />
    </svg>
);
export const PinIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h1.94l.56-2.243a1 1 0 111.94.486L13.44 6H15a1 1 0 110 2h-1.56l-.56 2.243a1 1 0 11-1.94-.486L11.47 8H9.53l-.56 2.243a1 1 0 01-1.94-.486L7.56 8H6a1 1 0 110-2h1.56l.56-2.243a1 1 0 011.123-1.727zM8.47 10l-.56 2.243a1 1 0 101.94.486L10.44 10H12a1 1 0 100-2h-1.56l-.56-2.243a1 1 0 10-1.94.486L8.44 8H7a1 1 0 100 2h1.47z" clipRule="evenodd" />
    </svg>
);
export const PhotoIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-4 h-4"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
    </svg>
);
export const EmojiIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className || "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);