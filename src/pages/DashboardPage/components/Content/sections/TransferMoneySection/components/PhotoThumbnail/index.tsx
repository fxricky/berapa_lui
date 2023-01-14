import React from 'react';
import styles from './styles.module.scss';

type Props = React.HTMLProps<HTMLDivElement> & {
  uri: string;
  isFocused?: boolean;
};

const PhotoThumbnail: React.FC<Props> = ({
  uri,
  isFocused = false,
  ...props
}) => {
  return (
    <div className={styles.container} {...props}>
      <img className={isFocused ? styles['is-focused'] : ''} src={uri} />
    </div>
  );
};

export default PhotoThumbnail;
