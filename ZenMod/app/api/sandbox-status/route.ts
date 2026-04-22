import { NextResponse } from 'next/server';

declare global {
  var activeSandbox: any;
  var sandboxData: any;
  var existingFiles: Set<string>;
}

export async function GET() {
  try {
    // Check if sandbox exists in memory
    const sandboxExists = !!global.activeSandbox;

    let sandboxHealthy = false;
    let sandboxInfo = null;

    if (sandboxExists && global.activeSandbox && global.sandboxData?.url) {
      try {
        // Actually verify the sandbox URL is reachable
        const healthCheck = await fetch(global.sandboxData.url, {
          method: 'HEAD',
          signal: AbortSignal.timeout(5000), // 5s timeout
        }).catch(() => null);

        if (healthCheck && healthCheck.ok) {
          sandboxHealthy = true;
          sandboxInfo = {
            sandboxId: global.sandboxData?.sandboxId,
            url: global.sandboxData?.url,
            filesTracked: global.existingFiles ? Array.from(global.existingFiles) : [],
            lastHealthCheck: new Date().toISOString()
          };
        } else {
          // Sandbox URL is not responding — clear stale data
          console.warn('[sandbox-status] Sandbox URL unreachable, clearing stale sandbox data');
          global.activeSandbox = undefined;
          global.sandboxData = undefined;
          sandboxHealthy = false;
        }
      } catch (error) {
        console.error('[sandbox-status] Health check failed:', error);
        // Clear stale sandbox on error
        global.activeSandbox = undefined;
        global.sandboxData = undefined;
        sandboxHealthy = false;
      }
    }

    return NextResponse.json({
      success: true,
      active: sandboxHealthy,
      healthy: sandboxHealthy,
      sandboxData: sandboxInfo,
      message: sandboxHealthy
        ? 'Sandbox is active and healthy'
        : 'No active sandbox'
    });

  } catch (error) {
    console.error('[sandbox-status] Error:', error);
    return NextResponse.json({
      success: false,
      active: false,
      error: (error as Error).message
    }, { status: 500 });
  }
}
