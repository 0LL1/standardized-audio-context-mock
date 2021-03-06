import { AudioContextMock } from '../../src/audio-context-mock';
import { AudioParamMock } from '../../src/audio-param-mock';
import { OscillatorNodeMock } from '../../src/oscillator-node-mock';

describe('OscillatorNodeMock', () => {

    let oscillatorNodeMock;

    beforeEach(() => {
        const context = new AudioContextMock();

        oscillatorNodeMock = new OscillatorNodeMock(context);
    });

    describe('detune', () => {

        it('should be readonly', () => {
            oscillatorNodeMock.detune = 'new value';

            expect(oscillatorNodeMock.detune).to.not.equal('new value');
        });

        it('should be a instance of AudioParamMock', () => {
            expect(oscillatorNodeMock.detune).to.be.an.instanceOf(AudioParamMock);
        });

        it('should have a default value of 0', () => {
            expect(oscillatorNodeMock.detune.defaultValue).to.equal(0);
        });

        it('should have a value of 0', () => {
            expect(oscillatorNodeMock.detune.value).to.equal(0);
        });

    });

    describe('frequency', () => {

        it('should be readonly', () => {
            oscillatorNodeMock.frequency = 'new value';

            expect(oscillatorNodeMock.frequency).to.not.equal('new value');
        });

        it('should be a instance of AudioParamMock', () => {
            expect(oscillatorNodeMock.frequency).to.be.an.instanceOf(AudioParamMock);
        });

        it('should have a default value of 440', () => {
            expect(oscillatorNodeMock.frequency.defaultValue).to.equal(440);
        });

        it('should have a value of 440', () => {
            expect(oscillatorNodeMock.frequency.value).to.equal(440);
        });

    });

});
