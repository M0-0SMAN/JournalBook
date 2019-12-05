import { h, Component } from 'preact';

class PlusPicker extends Component {
  addStep() {
    const { max = 10, step = 1 } = this.props.settings;
    const value = Number(this.props.value);
    let val = value + step;

    if (max !== null) {
      val = Math.min(val, max);
    }

    this.props.onChange(val);
  }

  removeStep() {
    const { min = 0, step = 1 } = this.props.settings;
    const value = Number(this.props.value);
    let val = value - step;

    if (min !== null) {
      val = Math.max(val, min);
    }

    this.props.onChange(val);
  }

  render({ id, value, settings = {}, onChange }) {
    return (
      <div class="plus-picker u-flex">
        <button
          class="button button--mini"
          type="button"
          onClick={() => this.removeStep()}
        >
          -
        </button>
        <input
          class="c-input-mini"
          type="number"
          id={id}
          value={value !== undefined ? value : settings.default}
          min={settings.min}
          max={settings.max}
          step={settings.step}
          onInput={event => {
            onChange(
              event.target.value === ''
                ? settings.default
                : Number(event.target.value)
            );
          }}
        />
        <button
          class="button button--mini"
          type="button"
          onClick={() => this.addStep()}
        >
          +
        </button>
      </div>
    );
  }
}

export { PlusPicker };
