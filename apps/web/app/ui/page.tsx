import DsBadge from "@workspace/design-system/components/ds-badge";
import DsButton from "@workspace/design-system/components/ds-button";
import DsCard from "@workspace/design-system/components/ds-card";
import DsInput from "@workspace/design-system/components/ds-input";
import DsProgress from "@workspace/design-system/components/ds-progress";

export default function UiPreviewPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <DsButton variant="primary">Primary</DsButton>
          <DsButton variant="secondary">Secondary</DsButton>
          <DsButton variant="outline">Outline</DsButton>
          <DsButton isLoading variant="primary">
            Loading
          </DsButton>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Input</h2>
        <div className="flex max-w-md flex-col gap-3">
          <DsInput label="Email" placeholder="you@example.com" />
          <DsInput
            helperText="3-20 characters, letters and numbers"
            label="Username"
            placeholder="epicode-user"
          />
          <DsInput
            error
            errorMessage="Password is too short"
            label="Password"
            placeholder="••••••••"
            type="password"
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Card</h2>
        <div className="max-w-xl">
          <DsCard
            footer={
              <div className="text-foreground-muted text-sm">Footer note</div>
            }
            header={<div className="font-semibold text-base">Sample Card</div>}
          >
            <p className="text-foreground text-sm">
              This is a simple card body showcasing the design-system styling.
            </p>
          </DsCard>
        </div>
      </section>

      <section className="flex max-w-xl flex-col gap-3">
        <h2 className="font-semibold text-lg">Progress</h2>
        <DsProgress label="Course completion" value={68} />
      </section>

      <section className="flex max-w-xl flex-col gap-3">
        <h2 className="font-semibold text-lg">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <DsBadge variant="default">Default</DsBadge>
          <DsBadge variant="completed">Completed</DsBadge>
          <DsBadge variant="default">In Progress</DsBadge>
          <DsBadge variant="default">Locked</DsBadge>
          <DsBadge variant="default">New</DsBadge>
        </div>
      </section>
    </main>
  );
}
