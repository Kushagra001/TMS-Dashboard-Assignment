$(document).ready(function() {
    // Nav item click handler
    $('.nav-item').on('click', function(e) {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    // Create Button Interaction
    $('.btn-fill-blue').on('click', function() {
        const originalText = $(this).html();
        const $btn = $(this);
        
        $btn.html('<i class="material-symbols-rounded spinning" style="font-size: 18px;">sync</i> Processing...');
        $btn.prop('disabled', true).css('opacity', '0.7');
        
        setTimeout(function() {
            $btn.html('<i class="material-symbols-rounded" style="font-size: 18px;">check</i> Success');
            $btn.css('background', '#28a745');
            
            setTimeout(function() {
                $btn.html(originalText);
                $btn.css('background', '');
                $btn.prop('disabled', false).css('opacity', '1');
            }, 2000);
        }, 1500);
    });

    // Card Hover Animations
    $('.tms-card').hover(
        function() {
            $(this).find('.material-symbols-rounded').not('.spinning').css({
                'transform': 'scale(1.1)',
                'transition': 'transform 0.2s ease'
            });
        },
        function() {
            $(this).find('.material-symbols-rounded').not('.spinning').css('transform', 'scale(1)');
        }
    );

    // Sidebar icon bounce
    $('.nav-item i').hover(
        function() {
            $(this).stop().animate({ marginTop: "-4px" }, 200);
        },
        function() {
            $(this).stop().animate({ marginTop: "0px" }, 200);
        }
    );

    // CSS for spinning icon (added dynamically)
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .spinning {
                animation: spin 1s linear infinite;
                display: inline-block;
            }
        `)
        .appendTo('head');

    // Mark all as read
    $('.feed-card .todo-meta').on('click', function() {
        $('.feed-card .status-badge').each(function() {
            if ($(this).text().includes('Unread')) {
                $(this).fadeOut(300, function() {
                    $(this).remove();
                });
            }
        });
        $('.feed-card h3 + .status-badge').fadeOut(300);
    });
});
