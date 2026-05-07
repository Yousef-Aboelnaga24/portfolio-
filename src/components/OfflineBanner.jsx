import { Offline } from 'react-detect-offline';
import { FiWifiOff } from 'react-icons/fi';

const OfflineBanner = () => {
  return (
    <Offline>
      <div className="fixed z-50 flex items-center px-4 py-3 space-x-3 text-white right-1/2 bottom-4 glass-card border-highlight/50 bg-highlight/20">
        <FiWifiOff className="text-highlight animate-pulse" size={20} />
        <div>
          <p className="text-sm font-semibold">You are offline</p>
          <p className="text-xs text-gray-300">Check your connection.</p>
        </div>
      </div>
    </Offline>
  );
};

export default OfflineBanner;
