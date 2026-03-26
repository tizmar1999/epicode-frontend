import DsBadge from "@workspace/design-system/components/ds-badge"
import DsButton from "@workspace/design-system/components/ds-button"
import DsCard from "@workspace/design-system/components/ds-card"
import DsInput from "@workspace/design-system/components/ds-input"
import DsProgress from "@workspace/design-system/components/ds-progress"

export default function UiPreviewPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <DsButton variant="primary">Primary</DsButton>
          <DsButton variant="secondary">Secondary</DsButton>
          <DsButton variant="outline">Outline</DsButton>
          <DsButton variant="primary" isLoading>
            Loading
          </DsButton>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Input</h2>
        <div className="flex flex-col gap-3 max-w-md">
          <DsInput label="Email" placeholder="you@example.com" />
          <DsInput
            label="Username"
            helperText="3-20 characters, letters and numbers"
            placeholder="epicode-user"
          />
          <DsInput
            label="Password"
            type="password"
            error
            errorMessage="Password is too short"
            placeholder="••••••••"
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Card</h2>
        <div className="max-w-xl">
          <DsCard
            header={<div className="text-base font-semibold">Sample Card</div>}
            footer={<div className="text-sm text-foreground-muted">Footer note</div>}
          >
            <p className="text-sm text-foreground">
              This is a simple card body showcasing the design-system styling.
            </p>
          </DsCard>
        </div>
      </section>

      <section className="flex flex-col gap-3 max-w-xl">
        <h2 className="text-lg font-semibold">Progress</h2>
        <DsProgress label="Course completion" value={68} />
      </section>

      <section className="flex flex-col gap-3 max-w-xl">
        <h2 className="text-lg font-semibold">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <DsBadge variant="default">Default</DsBadge>
          <DsBadge variant="completed">Completed</DsBadge>
          <DsBadge variant="default">In Progress</DsBadge>
          <DsBadge variant="default">Locked</DsBadge>
          <DsBadge variant="default">New</DsBadge>
        </div>
      </section>

    </main>
  )
}
