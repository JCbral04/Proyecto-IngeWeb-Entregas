import React from 'react';

const Card = ({ children, className = '', padding = 'p-6', shadow = 'shadow-sm', rounded = 'rounded-lg', ...props }) => {
  return (
    <div 
      className={`bg-white ${shadow} ${rounded} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b border-gray-200 pb-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-medium leading-6 text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`mt-1 text-sm text-gray-500 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`mt-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`mt-6 flex items-center justify-end space-x-3 ${className}`} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
