import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getCtaClicks, getLeads, type LeadRecord } from "@/lib/lead-store";
import { Eye, Lock, LogOut } from "lucide-react";

export const Route = createFileRoute("/dashboard")({ component: DashboardPage });

const DASHBOARD_PASSWORD = "700dashboard";

function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem("proc_dashboard_auth") === "1");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [leads, setLeads] = useState<LeadRecord[]>(() => getLeads());
  const [ctaClicks] = useState(() => getCtaClicks());

  const paidCount = useMemo(() => leads.filter((lead) => Boolean(lead.paymentProofDataUrl)).length, [leads]);

  function login() {
    if (password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem("proc_dashboard_auth", "1");
      setAuthenticated(true);
      setError("");
      return;
    }
    setError("Incorrect password.");
  }

  function logout() {
    sessionStorage.removeItem("proc_dashboard_auth");
    setAuthenticated(false);
    setPassword("");
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-hero-soft px-5 py-16">
        <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center">
          <Card className="w-full border-border shadow-soft">
            <CardContent className="space-y-5 p-7 text-center sm:p-9">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent text-primary">
                <Lock className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-primary">Private Dashboard</h1>
                <p className="mt-1 text-sm text-muted-foreground">Enter the dashboard password to continue.</p>
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                placeholder="Password"
                className="h-12"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button className="w-full rounded-full" onClick={login}>Open Dashboard</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-xl font-semibold text-primary">Lead Dashboard</h1>
            <p className="text-xs text-muted-foreground">PCOS Consultation</p>
          </div>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="mr-2 size-4" /> Logout
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-5 py-8">
        <div className="grid gap-4 sm:grid-cols-4">
          <SummaryCard label="Total Leads" value={leads.length} />
          <SummaryCard label="Today's Leads" value={leads.filter((lead) => lead.createdAt.slice(0, 10) === new Date().toISOString().slice(0, 10)).length} />
          <SummaryCard label="Payment Proofs" value={paidCount} />
          <SummaryCard label="CTA Clicks" value={Object.values(ctaClicks).reduce((sum, value) => sum + value, 0)} />
        </div>

        <Card className="border-border shadow-card">
          <CardContent className="p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-primary">Leads</h2>
                <p className="text-sm text-muted-foreground">Submitted checkout information.</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setLeads(getLeads())}>Refresh</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-3 py-3">Date</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Age</th>
                    <th className="px-3 py-3">WhatsApp</th>
                    <th className="px-3 py-3">City</th>
                    <th className="px-3 py-3">Concern</th>
                    <th className="px-3 py-3">Payment</th>
                    <th className="px-3 py-3">Proof</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr><td colSpan={8} className="px-3 py-10 text-center text-muted-foreground">No leads yet.</td></tr>
                  ) : leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-border/70 last:border-0">
                      <td className="px-3 py-3 whitespace-nowrap">{new Date(lead.createdAt).toLocaleString()}</td>
                      <td className="px-3 py-3 font-medium text-primary">{lead.fullName}</td>
                      <td className="px-3 py-3">{lead.age}</td>
                      <td className="px-3 py-3">{lead.whatsapp}</td>
                      <td className="px-3 py-3">{lead.city}</td>
                      <td className="px-3 py-3">{lead.concern}</td>
                      <td className="px-3 py-3">{lead.paymentMethod}</td>
                      <td className="px-3 py-3">
                        {lead.paymentProofDataUrl ? (
                          <a href={lead.paymentProofDataUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-primary underline">
                            <Eye className="mr-1 size-4" /> View
                          </a>
                        ) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-card">
          <CardContent className="p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-primary">CTA Clicks</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(ctaClicks).length === 0 ? (
                <p className="text-sm text-muted-foreground">No CTA clicks recorded yet.</p>
              ) : Object.entries(ctaClicks).map(([label, count]) => (
                <div key={label} className="rounded-xl bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-1 text-2xl font-semibold text-primary">{count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="border-border shadow-card">
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-3xl font-semibold text-primary">{value}</p>
      </CardContent>
    </Card>
  );
}
