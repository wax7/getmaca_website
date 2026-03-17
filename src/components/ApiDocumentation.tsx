import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, ChevronDown, Lock, Unlock, Zap, AlertTriangle, Link2, Terminal, BookOpen, Cpu, Shield, Radio, Layers } from 'lucide-react';

// ============================================================
// Terminal-Style Code Block with macOS Chrome
// ============================================================
function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langColor: Record<string, string> = {
    bash: 'text-green-400',
    json: 'text-amber-400',
    http: 'text-cyan-400',
    url: 'text-purple-400',
    python: 'text-blue-400',
    swift: 'text-orange-400',
    javascript: 'text-yellow-400',
  };

  return (
    <div className="relative group my-4 rounded-xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/30">
      {/* macOS Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#2a2a2e] dark:bg-[#1a1a1e]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className={`text-[11px] font-mono ml-2 ${langColor[language] || 'text-slate-400'}`}>{language}</span>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/10">
          {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {/* Code Content */}
      <pre className="p-4 bg-[#1e1e22] dark:bg-[#111114] overflow-x-auto text-sm leading-relaxed">
        <code className="text-[#e4e4e7] font-mono text-[13px]">{code}</code>
      </pre>
    </div>
  );
}

// ============================================================
// Collapsible Section with Gradient Accent
// ============================================================
function CollapsibleSection({ title, icon, children, defaultOpen = false, badge, accentColor = 'from-blue-500 to-indigo-500' }: {
  title: string; icon: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean; badge?: string; accentColor?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 px-5 py-4 text-left group">
        {/* Left accent bar */}
        <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${accentColor} opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
        <span className="flex-shrink-0 text-slate-500 dark:text-slate-400">{icon}</span>
        <span className="text-slate-900 dark:text-white font-medium">{title}</span>
        {badge && (
          <span className={`ml-auto text-[11px] px-2.5 py-1 rounded-full bg-gradient-to-r ${accentColor} text-white font-medium`}>
            {badge}
          </span>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
            <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Method Badge
// ============================================================
function MethodBadge({ method }: { method: 'GET' | 'PUT' }) {
  return method === 'GET'
    ? <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">GET</span>
    : <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/20">PUT</span>;
}

// ============================================================
// Endpoint Card with colored left border
// ============================================================
function EndpointCard({ method, path, description, auth, children, defaultOpen = false }: {
  method: 'GET' | 'PUT'; path: string; description: string; auth: boolean; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const borderColor = method === 'GET' ? 'border-l-emerald-500' : 'border-l-amber-500';

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-700/50 border-l-[3px] ${borderColor} bg-white/60 dark:bg-slate-800/20 backdrop-blur-sm`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex-wrap sm:flex-nowrap">
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
        </motion.div>
        <MethodBadge method={method} />
        <code className="text-[13px] font-mono text-slate-800 dark:text-slate-200">{path}</code>
        {auth
          ? <span className="flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full ring-1 ring-amber-500/20"><Lock className="w-3 h-3" />auth</span>
          : <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full ring-1 ring-emerald-500/20"><Unlock className="w-3 h-3" />open</span>}
        <span className="hidden sm:inline text-xs text-slate-400 dark:text-slate-500 ml-auto">{description}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-4 py-4 border-t border-slate-200/60 dark:border-slate-700/40 text-sm text-slate-600 dark:text-slate-400 space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Field Table
// ============================================================
function FieldTable({ fields }: { fields: [string, string, boolean, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-700/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50/80 dark:bg-slate-800/50">
            <th className="text-left px-3 py-2.5 text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Field</th>
            <th className="text-left px-3 py-2.5 text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Type</th>
            <th className="text-left px-3 py-2.5 text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Req</th>
            <th className="text-left px-3 py-2.5 text-slate-500 dark:text-slate-400 font-medium text-xs uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody>
          {fields.map(([name, type, req, desc], i) => (
            <tr key={i} className="border-t border-slate-200/60 dark:border-slate-700/40">
              <td className="px-3 py-2.5 font-mono text-xs text-violet-600 dark:text-violet-400">{name}</td>
              <td className="px-3 py-2.5 font-mono text-xs text-slate-500 dark:text-slate-400">{type}</td>
              <td className="px-3 py-2.5">{req ? <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> : <span className="text-slate-300 dark:text-slate-600">—</span>}</td>
              <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================================
// ============================================================
// MAIN COMPONENT
// ============================================================
// ============================================================
export function ApiDocumentation() {
  const [activeTab, setActiveTab] = useState<'python' | 'swift' | 'node' | 'curl'>('curl');

  return (
    <div className="space-y-6">

      {/* ─── Hero-style Connection Banner ─── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 sm:p-8 text-white shadow-xl">
        {/* Animated glow orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-widest">Local Control API</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Radio className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Base URL</div>
                <code className="text-sm text-white font-mono">127.0.0.1:59622/v1</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Cpu className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Transport</div>
                <span className="text-sm text-white">HTTP/1.1 loopback</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Layers className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Format</div>
                <code className="text-sm text-white font-mono">application/json</code>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Current rollout model:</strong> Read requests are open. For write requests, use the shared General Access Token from <code className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 text-xs font-mono">Settings → System → API</code>.
          </div>
        </div>
      </div>

      {/* ─── Quick Start ─── */}
      <CollapsibleSection title="Quick Start" icon={<Zap className="w-5 h-5 text-amber-500" />} defaultOpen={true} accentColor="from-amber-500 to-orange-500">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xs font-semibold">1</span>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">Check if MACA is running</h4>
            </div>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/status" />
            <CodeBlock code={`{
  "app": "MACA",
  "version": "1.0.675",
  "build": "083",
  "apiVersion": "1",
  "features": {
    "perAppVolume": true,
    "perAppMute": true,
    "perAppRouting": true,
    "focusMode": true,
    "volumePreview": true
  }
}`} language="json" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xs font-semibold">2</span>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">List apps with audio</h4>
            </div>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/apps" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xs font-semibold">3</span>
              <h4 className="font-medium text-slate-800 dark:text-slate-200">Change volume</h4>
            </div>
            <CodeBlock code={`curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/volume \\
  -H "Authorization: Bearer YOUR_GENERAL_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"volume": 0.5}'`} />
          </div>
        </div>
      </CollapsibleSection>

      {/* ─── Authentication ─── */}
      <CollapsibleSection title="Authentication" icon={<Shield className="w-5 h-5 text-violet-500" />} accentColor="from-violet-500 to-purple-500">
        <div className="space-y-4">
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200/60 dark:border-emerald-800/30">
              <div className="flex items-center gap-2 mb-1">
                <Unlock className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Read (GET)</span>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400/80">No authentication required</p>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-800/30">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-700 dark:text-amber-400">Write (PUT)</span>
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400/80">Bearer token required</p>
            </div>
          </div>

          <CodeBlock code="Authorization: Bearer <general-access-token>" language="http" />

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40">
            <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3 text-sm">Where to find the token:</h4>
            <div className="space-y-2">
              {[
                ['Open', 'Settings → System → API'],
                ['Copy', 'the current General Access Token'],
                ['Check', 'the expiry date shown next to it'],
              ].map(([action, detail], i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-[10px] font-semibold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm"><strong className="text-slate-800 dark:text-slate-200">{action}</strong> <span className="text-slate-500 dark:text-slate-400">{detail}</span></p>
                </div>
              ))}
            </div>
          </div>

          <h4 className="font-medium text-slate-800 dark:text-slate-200 mt-4 mb-2 text-sm">Scopes</h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-700/50">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50/80 dark:bg-slate-800/50">
                <th className="text-left px-3 py-2.5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Mode</th>
                <th className="text-center px-3 py-2.5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">GET</th>
                <th className="text-center px-3 py-2.5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">PUT per-app</th>
                <th className="text-center px-3 py-2.5 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">PUT global</th>
              </tr></thead>
              <tbody>
                <tr className="border-t border-slate-200/60 dark:border-slate-700/40">
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">No token</td>
                  <td className="text-center"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /></td>
                  <td className="text-center"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" /></td>
                  <td className="text-center"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" /></td>
                </tr>
                <tr className="border-t border-slate-200/60 dark:border-slate-700/40">
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">General Access Token</td>
                  <td className="text-center"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /></td>
                  <td className="text-center"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /></td>
                  <td className="text-center"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-800/30 text-sm text-amber-700 dark:text-amber-300">
            <strong>Without a token:</strong> only read endpoints work. Write endpoints return <code className="text-xs font-mono bg-amber-200/40 dark:bg-amber-900/40 px-1 py-0.5 rounded">401 Unauthorized</code>.
          </div>

          <h4 className="font-medium text-slate-800 dark:text-slate-200 mt-4 mb-2 text-sm">Invalid token response:</h4>
          <CodeBlock code={`HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="invalid_token"

{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "The provided token is invalid or does not grant access."
  }
}`} language="http" />
        </div>
      </CollapsibleSection>

      {/* ─── Endpoints ─── */}
      <CollapsibleSection title="Endpoints" icon={<Terminal className="w-5 h-5 text-cyan-500" />} badge="11 endpoints" defaultOpen={true} accentColor="from-cyan-500 to-blue-500">
        <div className="space-y-3">

          <h4 className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Read Endpoints
            <span className="text-[10px] text-slate-400 font-normal ml-1">(no auth required)</span>
          </h4>

          <EndpointCard method="GET" path="/v1/status" description="MACA version & features" auth={false}>
            <p>Returns MACA version, API version, and available features.</p>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/status" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (200):</p>
            <CodeBlock code={`{
  "app": "MACA",
  "version": "1.0.675",
  "build": "083",
  "apiVersion": "1",
  "features": {
    "perAppVolume": true,
    "perAppMute": true,
    "perAppRouting": true,
    "focusMode": true,
    "volumePreview": true
  }
}`} language="json" />
          </EndpointCard>

          <EndpointCard method="GET" path="/v1/apps" description="List all audio apps" auth={false}>
            <p>Returns all apps that currently have audio output.</p>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/apps" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (200):</p>
            <CodeBlock code={`[
  {
    "bundleID": "com.spotify.client",
    "name": "Spotify",
    "volume": 0.72,
    "isMuted": false,
    "outputDeviceUID": "BuiltInSpeakerDevice",
    "outputDeviceName": "MacBook Pro Speakers",
    "isRunning": true,
    "isPlaying": true,
    "pid": 1234
  },
  {
    "bundleID": "com.brave.Browser",
    "name": "Brave Browser",
    "volume": 1.0,
    "isMuted": false,
    "outputDeviceUID": null,
    "outputDeviceName": null,
    "isRunning": true,
    "isPlaying": false,
    "pid": 5678
  }
]`} language="json" />
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200/60 dark:border-blue-800/30 text-xs text-blue-700 dark:text-blue-300">
              <strong>Note:</strong> Response is a JSON array, not wrapped in <code className="font-mono">{`{"apps": [...]}`}</code>.
            </div>
          </EndpointCard>

          <EndpointCard method="GET" path="/v1/apps/{bundleID}" description="Get single app details" auth={false}>
            <p>Returns details for a specific app.</p>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/apps/com.spotify.client" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (200):</p>
            <CodeBlock code={`{
  "bundleID": "com.spotify.client",
  "name": "Spotify",
  "volume": 0.72,
  "isMuted": false,
  "outputDeviceUID": "BuiltInSpeakerDevice",
  "outputDeviceName": "MacBook Pro Speakers",
  "isRunning": true,
  "isPlaying": true,
  "pid": 1234
}`} language="json" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (404):</p>
            <CodeBlock code={`{
  "error": {
    "code": "APP_NOT_FOUND",
    "message": "No running audio app found for bundle identifier com.spotify.client."
  }
}`} language="json" />
          </EndpointCard>

          <EndpointCard method="GET" path="/v1/output-devices" description="List output devices" auth={false}>
            <p>Returns all available audio output devices.</p>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/output-devices" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (200):</p>
            <CodeBlock code={`[
  {
    "id": 67,
    "uid": "BuiltInSpeakerDevice",
    "name": "MacBook Pro Speakers",
    "icon": "speaker.fill",
    "isDefault": true,
    "isAirPlay": false,
    "isVirtual": false,
    "isBluetooth": false,
    "channelCount": 2
  },
  {
    "id": 82,
    "uid": "F8-FF-C2-01-99-00:output",
    "name": "AirPods Pro",
    "icon": "airpodspro",
    "isDefault": false,
    "isAirPlay": false,
    "isVirtual": false,
    "isBluetooth": true,
    "channelCount": 2
  }
]`} language="json" />
          </EndpointCard>

          <EndpointCard method="GET" path="/v1/default-output-device" description="Current default device" auth={false}>
            <p>Returns the current system default output device.</p>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/default-output-device" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (200):</p>
            <CodeBlock code={`{
  "id": 67,
  "uid": "BuiltInSpeakerDevice",
  "name": "MacBook Pro Speakers",
  "icon": "speaker.fill",
  "isDefault": true,
  "isAirPlay": false,
  "isVirtual": false,
  "isBluetooth": false,
  "channelCount": 2
}`} language="json" />
          </EndpointCard>

          <EndpointCard method="GET" path="/v1/focus-mode" description="Focus mode status" auth={false}>
            <p>Returns the current MACA Focus Mode status.</p>
            <CodeBlock code="curl http://127.0.0.1:59622/v1/focus-mode" />
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (200):</p>
            <CodeBlock code={`{ "active": false }`} language="json" />
          </EndpointCard>

          {/* ── Write Endpoints ── */}
          <h4 className="font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2 mt-8 text-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Write Endpoints
            <span className="text-[10px] text-slate-400 font-normal ml-1">(Bearer token required)</span>
          </h4>

          <EndpointCard method="PUT" path="/v1/apps/{bundleID}/volume" description="Set app volume" auth={true}>
            <p>Set the volume for a specific app.</p>
            <CodeBlock code={`curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/volume \\
  -H "Authorization: Bearer YOUR_GENERAL_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"volume": 0.5}'`} />
            <h5 className="font-medium text-slate-700 dark:text-slate-300 mt-3 mb-2 text-sm">Request body:</h5>
            <FieldTable fields={[
              ['volume', 'Double', true, '0.0 (silent) to 1.0 (full)'],
              ['mode', 'String', false, '"preview" or "commit" (default: "commit")'],
            ]} />
            <p className="mt-3"><strong className="text-slate-700 dark:text-slate-300">Response (200):</strong> Updated app DTO.</p>
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-3">Response (400):</p>
            <CodeBlock code={`{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Volume 1.5 is outside the supported range of 0.0...1.0."
  }
}`} language="json" />
          </EndpointCard>

          <EndpointCard method="PUT" path="/v1/apps/{bundleID}/mute" description="Mute/unmute app" auth={true}>
            <p>Mute or unmute a specific app.</p>
            <CodeBlock code={`curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/mute \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"muted": true}'`} />
            <FieldTable fields={[['muted', 'Boolean', true, 'true to mute, false to unmute']]} />
            <p className="mt-3"><strong className="text-slate-700 dark:text-slate-300">Response (200):</strong> Updated app DTO.</p>
          </EndpointCard>

          <EndpointCard method="PUT" path="/v1/apps/{bundleID}/output-device" description="Route app audio" auth={true}>
            <p>Route an app's audio to a specific output device.</p>
            <CodeBlock code={`curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/output-device \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"deviceUID": "F8-FF-C2-01-99-00:output"}'`} />
            <FieldTable fields={[['deviceUID', 'String', true, 'UID of the target device (from GET /v1/output-devices)']]} />
            <p className="mt-3 text-slate-500 dark:text-slate-400">Set to <code className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60">null</code> to reset to system default.</p>
            <p className="mt-1"><strong className="text-slate-700 dark:text-slate-300">Response (200):</strong> Updated app DTO.</p>
          </EndpointCard>

          <EndpointCard method="PUT" path="/v1/default-output-device" description="Change system default" auth={true}>
            <p>Change the system default output device.</p>
            <CodeBlock code={`curl -X PUT http://127.0.0.1:59622/v1/default-output-device \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"deviceUID": "BuiltInSpeakerDevice"}'`} />
            <FieldTable fields={[['deviceUID', 'String', true, 'UID of the device to set as default']]} />
            <p className="mt-3"><strong className="text-slate-700 dark:text-slate-300">Response (200):</strong> Updated device DTO.</p>
          </EndpointCard>

          <EndpointCard method="PUT" path="/v1/focus-mode" description="Toggle focus mode" auth={true}>
            <p>Toggle MACA Focus Mode.</p>
            <CodeBlock code={`curl -X PUT http://127.0.0.1:59622/v1/focus-mode \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"active": true}'`} />
            <FieldTable fields={[['active', 'Boolean', true, 'true to enable, false to disable']]} />
            <p className="mt-3"><strong className="text-slate-700 dark:text-slate-300">Response (200):</strong></p>
            <CodeBlock code='{"active": true}' language="json" />
          </EndpointCard>
        </div>
      </CollapsibleSection>

      {/* ─── Smooth Volume Control ─── */}
      <CollapsibleSection title="Smooth Volume Control" icon={<Zap className="w-5 h-5 text-purple-500" />} accentColor="from-purple-500 to-pink-500">
        <div className="space-y-4">
          <p>For building hardware controllers or software sliders, MACA supports two volume modes:</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/15 border border-blue-200/60 dark:border-blue-800/30">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20 font-medium">Preview</span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">Use during dragging. Instant but <strong>not persisted</strong>.</p>
                <CodeBlock code='{"volume": 0.45, "mode": "preview"}' language="json" />
                <ul className="text-xs text-blue-600 dark:text-blue-300/80 space-y-1 mt-3">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400" />No disk write — very fast</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-blue-400" />Old value restored on restart</li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/15 dark:to-teal-900/15 border border-emerald-200/60 dark:border-emerald-800/30">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 font-medium">Commit</span>
                </div>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">Use on release. <strong>Persists</strong> to disk.</p>
                <CodeBlock code='{"volume": 0.45, "mode": "commit"}' language="json" />
                <ul className="text-xs text-emerald-600 dark:text-emerald-300/80 space-y-1 mt-3">
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400" />Survives restarts</li>
                  <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400" />Default if mode omitted</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-700/40">
            <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-3 text-sm">Recommended Pattern</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20 font-mono">drag</span>
                <span className="text-slate-400">→</span>
                <code className="text-xs font-mono text-blue-600 dark:text-blue-400">PUT volume (mode: "preview")</code>
                <span className="text-xs text-slate-400">on each change</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 font-mono">release</span>
                <span className="text-slate-400">→</span>
                <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400">PUT volume (mode: "commit")</code>
                <span className="text-xs text-slate-400">final value</span>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* ─── Error Handling ─── */}
      <CollapsibleSection title="Error Handling" icon={<AlertTriangle className="w-5 h-5 text-red-500" />} accentColor="from-red-500 to-rose-500">
        <div className="space-y-4">
          <p>All errors follow this format:</p>
          <CodeBlock code={`{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable description."
  }
}`} language="json" />

          <h4 className="font-medium text-slate-800 dark:text-slate-200 text-sm">Error Code Reference</h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-700/50">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50/80 dark:bg-slate-800/50">
                <th className="text-left px-3 py-2.5 font-medium text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">HTTP</th>
                <th className="text-left px-3 py-2.5 font-medium text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Code</th>
                <th className="text-left px-3 py-2.5 font-medium text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">When</th>
              </tr></thead>
              <tbody>
                {[
                  ['400', 'INVALID_REQUEST', 'Bad JSON, missing fields, volume out of range'],
                  ['401', 'UNAUTHORIZED', 'Missing or invalid Bearer token on write endpoints'],
                  ['403', 'FORBIDDEN', 'Connection from non-loopback address'],
                  ['403', 'TARGET_NOT_ALLOWED', 'Token cannot control this app'],
                  ['403', 'GLOBAL_CONTROL_NOT_ALLOWED', 'Token lacks writeAll scope'],
                  ['404', 'NOT_FOUND', 'Unknown endpoint'],
                  ['404', 'APP_NOT_FOUND', 'No audio app with this bundle ID'],
                  ['404', 'DEVICE_NOT_FOUND', 'No device with this UID'],
                  ['413', 'REQUEST_TOO_LARGE', 'Request body > 64 KB'],
                  ['500', 'INTERNAL_ERROR', 'Unexpected server error'],
                  ['503', 'SERVICE_UNAVAILABLE', 'MACA is still starting up'],
                ].map(([http, code, when], i) => (
                  <tr key={i} className="border-t border-slate-200/60 dark:border-slate-700/40 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-3 py-2 font-mono text-xs text-slate-600 dark:text-slate-400">{http}</td>
                    <td className="px-3 py-2 font-mono text-xs text-red-600 dark:text-red-400">{code}</td>
                    <td className="px-3 py-2 text-slate-500 dark:text-slate-400">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CollapsibleSection>

      {/* ─── Pairing Flow ─── */}
      <CollapsibleSection title="Pairing Flow" icon={<Link2 className="w-5 h-5 text-cyan-500" />} accentColor="from-cyan-500 to-teal-500">
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200/60 dark:border-blue-800/30 text-sm text-blue-700 dark:text-blue-300">
            Pairing exists for future per-app integrations. Most integrations can simply use the shared token from Settings.
          </div>

          {[
            { step: 1, title: 'Open the pairing URL', content: (
              <CodeBlock code="maca://pair?client_name=My%20App&callback=myapp%3A%2F%2Fpaired&scopes=read%2Cwrite&bundle_id=com.example.myapp" language="url" />
            )},
            { step: 2, title: 'User approves in MACA', content: (
              <p className="text-sm text-slate-500 dark:text-slate-400">MACA shows a consent dialog. The user can approve or deny.</p>
            )},
            { step: 3, title: 'Receive the token', content: (
              <div className="space-y-2">
                <p className="text-sm"><strong className="text-emerald-600 dark:text-emerald-400">On approval:</strong></p>
                <CodeBlock code="myapp://paired?status=approved&token=a4Bx_kL9-Zm2pQ8n...&client_id=550e8400-...&port=59622&scopes=read,write" language="url" />
                <p className="text-sm"><strong className="text-red-500 dark:text-red-400">On denial:</strong></p>
                <CodeBlock code="myapp://paired?status=denied&error=access_denied" language="url" />
              </div>
            )},
            { step: 4, title: 'Store the token', content: (
              <p className="text-sm text-slate-500 dark:text-slate-400">Save securely (Keychain, credential store). It will not be shown again.</p>
            )},
          ].map(({ step, title, content }) => (
            <div key={step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white text-xs font-semibold flex-shrink-0">{step}</span>
                {step < 4 && <div className="w-px flex-1 bg-gradient-to-b from-cyan-300/40 to-transparent dark:from-cyan-700/40 mt-1" />}
              </div>
              <div className="pb-4 flex-1 min-w-0">
                <h5 className="font-medium text-slate-800 dark:text-slate-200 text-sm mb-2">{title}</h5>
                {content}
              </div>
            </div>
          ))}

          <h5 className="font-medium text-slate-800 dark:text-slate-200 text-sm mt-2 mb-2">Pairing URL Parameters</h5>
          <FieldTable fields={[
            ['client_name', 'String', true, 'Display name shown in consent dialog'],
            ['callback', 'String', true, 'URL where MACA sends the token'],
            ['scopes', 'String', true, 'Comma-separated: read, write, writeAll'],
            ['bundle_id', 'String', false, 'Your app\'s bundle ID (required for write scope)'],
            ['helper_bundle_ids', 'String', false, 'Comma-separated helper app bundle IDs'],
          ]} />
        </div>
      </CollapsibleSection>

      {/* ─── Code Examples ─── */}
      <CollapsibleSection title="Code Examples" icon={<BookOpen className="w-5 h-5 text-indigo-500" />} defaultOpen={true} accentColor="from-indigo-500 to-violet-500">
        <div>
          {/* Custom language tabs */}
          <div className="flex gap-1 mb-5 p-1 rounded-xl bg-[#1e1e22] dark:bg-[#111114] w-fit shadow-inner">
            {([
              { key: 'curl' as const, label: 'curl', color: 'text-green-400' },
              { key: 'python' as const, label: 'Python', color: 'text-blue-400' },
              { key: 'swift' as const, label: 'Swift', color: 'text-orange-400' },
              { key: 'node' as const, label: 'Node.js', color: 'text-yellow-400' },
            ]).map(({ key, label, color }) => (
              <button key={key} onClick={() => setActiveTab(key)} className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${activeTab === key ? `bg-white/10 ${color} shadow-sm` : 'text-slate-500 hover:text-slate-300'}`}>
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>
              {activeTab === 'curl' && (
                <CodeBlock code={`# Status
curl -s http://127.0.0.1:59622/v1/status | python3 -m json.tool

# List apps
curl -s http://127.0.0.1:59622/v1/apps | python3 -m json.tool

# Get single app
curl -s http://127.0.0.1:59622/v1/apps/com.spotify.client | python3 -m json.tool

# List output devices
curl -s http://127.0.0.1:59622/v1/output-devices | python3 -m json.tool

# Set volume (needs token)
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/volume \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"volume": 0.5}'

# Mute an app
curl -X PUT http://127.0.0.1:59622/v1/apps/com.spotify.client/mute \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"muted": true}'

# Change default output device
curl -X PUT http://127.0.0.1:59622/v1/default-output-device \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"deviceUID": "BuiltInSpeakerDevice"}'

# Toggle focus mode
curl -X PUT http://127.0.0.1:59622/v1/focus-mode \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"active": true}'`} />
              )}
              {activeTab === 'python' && (
                <CodeBlock code={`import http.client
import json

HOST = "127.0.0.1"
PORT = 59622
TOKEN = "your-token-here"

def maca_get(path):
    conn = http.client.HTTPConnection(HOST, PORT, timeout=5)
    conn.request("GET", path)
    resp = conn.getresponse()
    data = json.loads(resp.read())
    conn.close()
    return resp.status, data

def maca_put(path, body):
    conn = http.client.HTTPConnection(HOST, PORT, timeout=5)
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {TOKEN}"
    }
    conn.request("PUT", path, json.dumps(body), headers)
    resp = conn.getresponse()
    data = json.loads(resp.read())
    conn.close()
    return resp.status, data

# Check if MACA is running
status_code, info = maca_get("/v1/status")
print(f"MACA {info['version']} (Build {info['build']})")

# List all audio apps
_, apps = maca_get("/v1/apps")
for app in apps:
    print(f"  {app['name']}: {int(app['volume'] * 100)}%")

# Set Spotify to 50% volume
status, result = maca_put("/v1/apps/com.spotify.client/volume", {
    "volume": 0.5
})
if status == 200:
    print(f"Spotify volume -> {int(result['volume'] * 100)}%")

# Mute Brave
maca_put("/v1/apps/com.brave.Browser/mute", {"muted": True})`} language="python" />
              )}
              {activeTab === 'swift' && (
                <CodeBlock code={`import Foundation

struct MACAClient {
    let baseURL = "http://127.0.0.1:59622/v1"
    let token: String
    
    func getApps() async throws -> [[String: Any]] {
        let url = URL(string: "\\(baseURL)/apps")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONSerialization.jsonObject(with: data) as? [[String: Any]] ?? []
    }
    
    func setVolume(bundleID: String, volume: Double, mode: String = "commit") async throws {
        let url = URL(string: "\\(baseURL)/apps/\\(bundleID)/volume")!
        var request = URLRequest(url: url)
        request.httpMethod = "PUT"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \\(token)", forHTTPHeaderField: "Authorization")
        request.httpBody = try JSONSerialization.data(withJSONObject: [
            "volume": volume, "mode": mode
        ])
        let (_, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse, http.statusCode == 200 else {
            throw URLError(.badServerResponse)
        }
    }
    
    func setMute(bundleID: String, muted: Bool) async throws {
        let url = URL(string: "\\(baseURL)/apps/\\(bundleID)/mute")!
        var request = URLRequest(url: url)
        request.httpMethod = "PUT"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \\(token)", forHTTPHeaderField: "Authorization")
        request.httpBody = try JSONSerialization.data(withJSONObject: ["muted": muted])
        let (_, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse, http.statusCode == 200 else {
            throw URLError(.badServerResponse)
        }
    }
}

// Usage
let client = MACAClient(token: "your-token-here")
let apps = try await client.getApps()
try await client.setVolume(bundleID: "com.spotify.client", volume: 0.5)`} language="swift" />
              )}
              {activeTab === 'node' && (
                <CodeBlock code={`const http = require("http");

const MACA = {
  host: "127.0.0.1",
  port: 59622,
  token: "your-token-here",

  request(method, path, body = null) {
    return new Promise((resolve, reject) => {
      const headers = { Accept: "application/json" };
      if (body) headers["Content-Type"] = "application/json";
      if (method === "PUT") headers["Authorization"] = \`Bearer \${this.token}\`;

      const req = http.request(
        { hostname: this.host, port: this.port, path, method, headers },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve({
            status: res.statusCode,
            data: JSON.parse(data)
          }));
        }
      );
      req.on("error", reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  },

  getStatus()  { return this.request("GET", "/v1/status"); },
  getApps()    { return this.request("GET", "/v1/apps"); },
  getDevices() { return this.request("GET", "/v1/output-devices"); },

  setVolume(bundleID, volume, mode = "commit") {
    return this.request("PUT", \`/v1/apps/\${bundleID}/volume\`, { volume, mode });
  },
  setMute(bundleID, muted) {
    return this.request("PUT", \`/v1/apps/\${bundleID}/mute\`, { muted });
  },
};

// Usage
(async () => {
  const { data: status } = await MACA.getStatus();
  console.log(\`MACA \${status.version}\`);

  const { data: apps } = await MACA.getApps();
  apps.forEach((app) =>
    console.log(\`  \${app.name}: \${Math.round(app.volume * 100)}%\`)
  );

  await MACA.setVolume("com.spotify.client", 0.5);
  console.log("Spotify -> 50%");
})();`} language="javascript" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </CollapsibleSection>

      {/* ─── Integrations ─── */}
      <CollapsibleSection title="Integrations" icon={<Link2 className="w-5 h-5 text-emerald-500" />} accentColor="from-emerald-500 to-green-500">
        <p className="mb-4">MACA's API works with any tool that can send HTTP requests:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ['Stream Deck', 'HTTP Request plugin', 'from-blue-500/10 to-cyan-500/10 border-blue-200/50 dark:border-blue-800/30'],
            ['Raycast', 'Script Command (Bash/Python/Node)', 'from-orange-500/10 to-amber-500/10 border-orange-200/50 dark:border-orange-800/30'],
            ['Keyboard Maestro', '"Execute Shell Script" action', 'from-purple-500/10 to-violet-500/10 border-purple-200/50 dark:border-purple-800/30'],
            ['BetterTouchTool', '"Execute Terminal Command" trigger', 'from-red-500/10 to-pink-500/10 border-red-200/50 dark:border-red-800/30'],
            ['Home Assistant', 'REST command integration', 'from-cyan-500/10 to-teal-500/10 border-cyan-200/50 dark:border-cyan-800/30'],
            ['Shortcuts.app', '"Get Contents of URL" action', 'from-pink-500/10 to-rose-500/10 border-pink-200/50 dark:border-pink-800/30'],
          ].map(([tool, how, colors], i) => (
            <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${colors} border backdrop-blur-sm`}>
              <h5 className="font-medium text-slate-800 dark:text-slate-200 text-sm mb-1">{tool}</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400">{how}</p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* ─── Limits & Notes ─── */}
      <CollapsibleSection title="Limits & Notes" icon={<AlertTriangle className="w-5 h-5 text-slate-500" />} accentColor="from-slate-400 to-slate-500">
        <ul className="space-y-3">
          {[
            ['Loopback only', 'Only accepts connections from 127.0.0.1 / ::1. Remote access is not supported.'],
            ['MACA must be running', 'The API is only available while MACA is active.'],
            ['API must be enabled', 'Enable in Settings → System → API.'],
            ['Max request size', '64 KB body, 16 KB headers.'],
            ['Default port', '59622, configurable in Settings.'],
            ['Connection model', 'Server closes after each response (Connection: close).'],
          ].map(([title, desc], i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/20 border border-slate-200/40 dark:border-slate-700/30">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
              <div>
                <strong className="text-slate-800 dark:text-slate-200 text-sm">{title}.</strong>{' '}
                <span className="text-slate-500 dark:text-slate-400 text-sm">{desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </CollapsibleSection>
    </div>
  );
}
