//% weight=0 color=#13A89E icon="\uf005" block="Sprites Advanced"
//% advanced=false
//% groups="['Sprite Aquisition', 'Animation',]"

namespace spritesAdvanced{
    /**
     * Control a sprite with controller direciton buttons. Runs the given animation when the sprite moves.
     * Passing movement speed is optional
     */
    //% blockId=moveSpriteWithAnimation
    //% block="move $sprite=variables_get(mySprite) with $anim=variables_get(anim) || interval %frameLength || vx $vx vy %vy"
    //% group="Animation"
    //% frameLength.defl=100 vx.defl=100 vy.defl=100
    //% expandableArgumentMode="toggle"
    //% weight=20
    //% expandableArgumentMode="toggle"
    export function moveSpriteWithAnimation(sprite: Sprite, anim: Image[], frameLength = 100, vx = 100, vy = 100){
        let is_animated = false;
        controller.moveSprite(sprite, vx, vy);
        game.onUpdate(function tick(){
            if (sprite.vx != 0 || sprite.vy != 0){
                if (!is_animated){
                    animation.runImageAnimation(sprite, anim, frameLength, true);
                    is_animated = true
                }
            }
            else{
                animation.stopAnimation(animation.AnimationTypes.All, sprite);
                is_animated = false
            }
        })
    }
}
/**
         * Control a sprite using the direction buttons from the controller. Note that this will overwrite
         * the current velocity of the sprite whenever a directional button is pressed. To stop controlling
         * a sprite, pass 0 for vx and vy.
         *
         * @param sprite The Sprite to control
         * @param vx The velocity used for horizontal movement when left/right is pressed
         * @param vy The velocity used for vertical movement when up/down is pressed
         */
        //% blockId="ctrlgame_control_sprite" block="%controller move $sprite=variables_get(mySprite) with buttons||vx $vx vy $vy"
        //% weight=100
        //% expandableArgumentMode="toggle"
        //% vx.defl=100 vy.defl=100
        //% help=controller/move-sprite
        //% group="Multiplayer"
        //% vx.shadow="spriteSpeedPicker"
        //% vy.shadow="spriteSpeedPicker"
        //% parts="multiplayer"